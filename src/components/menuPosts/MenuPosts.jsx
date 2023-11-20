import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CssStyleList } from "@/utils/cssList";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ Post, withImage }) => {
  return (
    <div className={styles.items}>
      {Post?.map((item) => (
        <Link
          href={`/posts/${item.slug}`}
          key={item.id}
          className={styles.item}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={item.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span
              className={`${styles.category} ${
                styles[CssStyleList[item.catSlug]]
              }`}
            >
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user?.name}</span>
              <span className={styles.date}>
                {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
