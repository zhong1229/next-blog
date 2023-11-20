"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillAppstore, AiOutlineClose } from "react-icons/ai";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if ((e.target.innerWidth < 640 || e.target.innerWidth === 640) && !open) {
        document.body.style.overflowY = "auto";
      } else {
        setOpen(false);
      }
    });
  }, [open]);

  const OpenStatus = (status) => {
    if (typeof window !== "undefined") {
      if (status) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
      setOpen(status);
    }
  };

  return (
    <>
      <div className={styles.burger} onClick={() => OpenStatus(true)}>
        <AiFillAppstore className={styles.icons} />
      </div>
      <div
        className={`${styles.responsiveMenu} ${
          open ? styles.open : styles.close
        }`}
      >
        <div className={styles.title}>
          <div className={styles.avatar}>
            <Image
              src={"/avatar.jpg"}
              width={32}
              height={32}
              alt=""
              className={styles.images}
            />
          </div>
          <h5 className={styles.logo}>
            <Image src="/logo.png" alt="鹏渊墨客" width={32} height={32} />{" "}
            鹏渊墨客
          </h5>
          <div className={styles.closeIcon} onClick={() => OpenStatus(false)}>
            <AiOutlineClose />
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.desc}>要优秀啊，不然怎么遇见优秀的人！</div>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.subLink}>
                <i></i>
                <span>主页</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.subLink}>
                <i></i>
                <span>关于我</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.bgContainer}>
          <Image src="/bg/menubg.png" alt="" fill className={styles.bgImage} />
        </div>
      </div>
    </>
  );
};

export default AuthLinks;
