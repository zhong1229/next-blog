"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useEffect, useState } from "react";
import { AiOutlineHome, AiFillSmile } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setScrollY(window.scrollY));
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", () => setScrollY(window.scrollY));
      }
    };
  }, []);
  return (
    <header className={`${scrollY > 0 ? "sticky" : ""}`}>
      <div className={`${styles.container}`}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src="/logo.png" alt="鹏渊墨客" width={32} height={32} />{" "}
            鹏渊墨客
          </div>
        </Link>
        <div className={styles.links}>
          <ThemeToggle />
          <Link href="/" className={styles.link}>
            <AiOutlineHome />
            主页
          </Link>
          <Link href="/about" className={styles.link}>
            <AiFillSmile />
            关于我
          </Link>
          <AuthLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
