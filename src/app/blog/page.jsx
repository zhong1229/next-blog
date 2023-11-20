import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import toast from "react-hot-toast";
import Bubbles from "@/components/bubbles/bubbles";

const getData = async (cat) => {
  const res = await fetch("http://risingsource.top/api/categories/" + cat, {
    cache: "no-store",
  });

  if (!res.ok) {
    toast.error("分类获取失败");
    return false;
  }

  return res.json();
};

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  const CatData = await getData(cat);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.catContainer}>
          <div className={styles.catSubContainer}>
            <Image src={CatData.img} alt={cat} fill className={styles.image} />
            <h1 className={styles.title}>{cat}</h1>
            <Bubbles />
          </div>
        </div>
        <div className={styles.content}>
          <CardList page={page} cat={cat} />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
