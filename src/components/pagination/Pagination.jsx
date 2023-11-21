"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  const SearchParams = useSearchParams();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() =>
          router.push(
            `?${
              SearchParams.get("cat") ? `cat=${SearchParams.get("cat")}` : ""
            }&page=${page - 1}`
          )
        }
      >
        上一页
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() =>
          router.push(
            `?${
              SearchParams.get("cat") ? `cat=${SearchParams.get("cat")}` : ""
            }&page=${page + 1}`
          )
        }
      >
        下一页
      </button>
    </div>
  );
};

export default Pagination;
