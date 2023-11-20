import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

import { FaRegCalendarCheck, FaTags } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <Link href={`/posts/${item.slug}`} className={styles.title}>
          {item.title}
        </Link>
        <div className={styles.detail}>
          <span className={styles.date}>
            <FaRegCalendarCheck /> 发布于 {item.createdAt.substring(0, 10)}
          </span>
          <span>|</span>
          <Link href={`/blog?cat=${item.catSlug}`} className={styles.category}>
            <FaTags />
            {item.catSlug}
          </Link>
        </div>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: item?.desc.substring(0, 60).trim(),
          }}
        />
      </div>
    </div>
  );
};

export default Card;
