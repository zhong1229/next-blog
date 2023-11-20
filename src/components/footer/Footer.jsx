import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="CurioSphere"
            width={50}
            height={50}
            className={styles.image}
          />
          <h1 className={styles.logoText}>鹏渊墨客</h1>
        </div>
        <p className={styles.desc}>
          这个博客将探讨各种引人入胜的主题，涵盖了广泛的话题，从科技前沿到心灵成长，再到旅行和文化。我相信生活是一个不断学习和探索的旅程，因此这个博客将成为我的思考和发现的空间。通过这些文章，我将与您分享关于如何更好地理解这个世界、提升个人技能、保持身心健康，以及感受文化多样性的见解。我期待与您建立有意义的互动，一起讨论这些主题，并一同探索生活的美妙之处。无论您是正在寻找灵感还是纯粹享受阅读，我都希望这个博客能够成为一个有启发性和有趣的资源，帮助您在不断变化的世界中找到方向。
        </p>
        <div className={styles.icons}>
          <Link href="https://space.bilibili.com/1747646855" target="_blank">
            <Image src="/facebook.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.douyin.com/user/self" target="_blank">
            <Image src="/tiktok.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://gitee.com/winterht" target="_blank">
            <Image src="/instagram.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://github.com/zhong1229" target="_blank">
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">主页</Link>
          <Link href="/about">关于我</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={`/blog?cat=学习笔记`}>学习笔记</Link>
          <Link href={`/blog?cat=休闲娱乐`}>休闲娱乐</Link>
          <Link href={`/blog?cat=闲言碎语`}>闲言碎语</Link>
          <Link href={`/blog?cat=资源分享`}>资源分享</Link>
          <Link href={`/blog?cat=生活点滴`}>生活点滴</Link>
          <Link href={`/blog?cat=网站公告`}>网站公告</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://space.bilibili.com/1747646855">哔哩哔哩</Link>
          <Link href="https://www.douyin.com/user/self">抖音</Link>
          <Link href="https://gitee.com/winterht">gitee</Link>
          <Link href="https://github.com/zhong1229">github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
