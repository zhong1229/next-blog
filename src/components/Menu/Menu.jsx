import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import Image from "next/image";

const getData = async (sort) => {
  const res = await fetch(`http://risingsource.top/api/posts?sort=${sort}`);

  if (!res.ok) {
    throw new Error("失败");
  }

  return res.json();
};

const Menu = async () => {
  const LoveData = await getData("views");
  const FeaturedData = await getData("weight");
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>
        <Image
          src="/bg/1f525.png"
          alt="最受欢迎的帖子"
          width={40}
          height={40}
        />
        最受欢迎的帖子
      </h1>
      <MenuPosts Post={LoveData.posts} withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>
        <Image src="/bg/icons1.png" alt="精选文章" width={40} height={40} />
        分类
      </h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>
        {" "}
        <Image src="/bg/m.gif" alt="精选文章" width={40} height={40} />
        精选文章
      </h1>
      <MenuPosts Post={FeaturedData.posts} withImage={true} />
    </div>
  );
};

export default Menu;
