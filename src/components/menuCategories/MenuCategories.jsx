import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

import { CssStyleList } from "@/utils/cssList";
const getData = async () => {
  const res = await fetch("http://risingsource.top/api/categories");

  if (!res.ok) {
    throw new Error("失败");
  }

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          className={`${styles.categoryItem} ${
            styles[CssStyleList[item.slug]]
          }`}
          key={item.id + "mouse"}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
