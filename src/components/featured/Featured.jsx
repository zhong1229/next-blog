import React from "react";
import styles from "./featured.module.css";
import SniperContainer from "../SniperContainer/SniperContainer";

import Link from "next/link";
import { AiFillGithub, AiFillWechat, AiFillGoogleCircle } from "react-icons/ai";
import { FaBilibili, FaQq } from "react-icons/fa6";
import Image from "next/image";

const getData = async (sort) => {
  const res = await fetch(`http://risingsource.top/api/posts?sort=${sort}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("失败");
  }

  return res.json();
};
//获取每日的名人名言
const getTitleContent = async () => {
  const res = await fetch(
    "https://v1.hitokoto.cn/?encode=json&c=d&c=j&c=k&c=k&c=i&lang=cn"
  );
  if (!res.ok) {
    throw new Error("失败");
  }
  return res.json();
};
const Featured = async () => {
  const LoveData = await getData("views");
  const titleContent = await getTitleContent();
  // console.log(titleContent);
  // console.log(LoveData);
  return (
    <div className={styles.container}>
      <div className={styles.media_icons}>
        <Link
          href="https://github.com/zhong1229"
          className={styles.link}
          target="_blank"
        >
          <AiFillGithub></AiFillGithub>
        </Link>
        <Link href="#" className={`${styles.link} ${styles.WeChat}`}>
          <AiFillWechat />
          <div className={styles.CardContainer}>
            <Image src="/userInfo/wexing.png" alt="微信" fill />
          </div>
        </Link>
        <Link
          href="https://gitee.com/winterht"
          target="_blank"
          className={styles.link}
        >
          <AiFillGoogleCircle />
        </Link>
        <Link
          href="https://space.bilibili.com/1747646855"
          target="_blank"
          className={styles.link}
        >
          <FaBilibili />
        </Link>
        <Link href="#" className={`${styles.link} ${styles.QQ}`}>
          <FaQq />
          <div className={styles.CardContainer}>
            <Image src="/userInfo/qq.jpg" alt="QQ" fill />
          </div>
        </Link>
      </div>
      <SniperContainer Posts={LoveData.posts} />
    </div>
  );
};

export default Featured;
