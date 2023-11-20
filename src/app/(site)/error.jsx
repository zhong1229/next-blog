"use client";

import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className={"frem"}>
      <p>404</p>
      <h2>看起来你迷路了</h2>
      <h5>你所寻找的页面已丢失!</h5>
      <Link href="/">返回首页</Link>
    </div>
  );
};

export default Error;
