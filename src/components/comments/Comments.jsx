"use client";

import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import { AiFillRedditCircle } from "react-icons/ai";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [fromState, setFromState] = useState({
    name: "",
    desc: "",
    userEmail: "",
    website: "",
  });

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({
        ...fromState,
        postSlug: parseInt(decodeURIComponent(postSlug)),
      }),
    });
    mutate();
    document.getElementById("textareaId").value = "";
    const inputs = document.querySelectorAll("input");
    inputs.forEach((item) => {
      item.value = "";
    });
  };
  const genNickName = () => {
    // 获取指定范围内的随机数
    function randomAccess(min, max) {
      return Math.floor(Math.random() * (min - max) + max);
    }

    // 解码
    function decodeUnicode(str) {
      //Unicode显示方式是\u4e00
      str = "\\u" + str;
      str = str.replace(/\\/g, "%");
      //转换中文
      str = unescape(str);
      //将其他受影响的转换回原来
      str = str.replace(/%/g, "\\");
      return str;
    }

    function getRandomName(len) {
      let name = "";
      for (let i = 0; i < len; i++) {
        let unicodeNum = "";
        unicodeNum = randomAccess(0x4e00, 0x9fa5).toString(16);
        name += decodeUnicode(unicodeNum);
      }
      return name;
    }
    return getRandomName(4);
  };

  const changeMouse = () => {
    setFromState({ name: genNickName(), userEmail: "admin123@zh.com" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.labelTitle}>
          <AiFillRedditCircle />
          评论({data?.length || 0})
        </div>
        <div className={styles.bostons} onClick={changeMouse}>
          匿名发布
        </div>
      </div>
      <div className={styles.write}>
        <textarea
          className={`scrollbar-style ${styles.input}`}
          cols="45"
          rows="8"
          maxLength="65525"
          id="textareaId"
          onChange={(e) => setFromState({ ...fromState, desc: e.target.value })}
        />
        <div className={styles.infoContainer}>
          <div className={styles.optionsInfo}>
            <input
              type="text"
              placeholder="显示名称"
              value={fromState.name}
              onChange={(e) =>
                setFromState({ ...fromState, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="电子邮箱地址"
              value={fromState.userEmail}
              onChange={(e) =>
                setFromState({ ...fromState, userEmail: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="网站地址(可选)"
              onChange={(e) =>
                setFromState({ ...fromState, website: e.target.value })
              }
            />
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            发表评论
          </button>
        </div>
      </div>
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  {item.img && (
                    <Image
                      src={item.img}
                      alt=""
                      width={42}
                      height={42}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
