"use client";
import { bubbles } from "@/utils/bubbles";
import React, { useEffect } from "react";
import styles from "./Bubbles.module.css";
const Bubbles = () => {
  useEffect(
    () => async () => {
      {
        const id = await bubbles("bubbles");
        return () => {
          window.cancelAnimationFrame(id);
        };
      }
    },
    []
  );

  return <canvas id="bubbles" className={styles.canvas}></canvas>;
};

export default Bubbles;
