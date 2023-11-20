import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { Waves } from "@/components/waves/Waves";
import { AiOutlineTags, AiFillClockCircle, AiFillCrown } from "react-icons/ai";
import Link from "next/link";
import Menu from "@/components/Menu/Menu";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <>
      <div className={styles.imageContainer}>
        <Image src={data.img} alt="" fill className={styles.image} />
        <div className={styles.wavesContainer}>
          <Waves />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{data?.title}</h1>
            <div className={styles.tags}>
              <AiOutlineTags />
              <Link href={`/blog?cat=${data?.catSlug}`}>
                <span className={styles.cat}>{data?.catSlug}</span>
              </Link>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <p className={styles.label}>发布时间</p>
                <p className={styles.mos}>
                  <AiFillClockCircle /> {data?.createdAt?.substring(0, 10)}
                </p>
              </div>
              <div className={styles.item}>
                <p className={styles.label}>热度</p>
                <p className={styles.mos}>
                  <AiFillCrown /> {data?.views || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className="md-editor">
              <article
                className="md-editor-preview default-theme"
                dangerouslySetInnerHTML={{ __html: data?.desc }}
              />
            </div>
            <div className={styles.comment}>
              <Comments postSlug={slug} />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
