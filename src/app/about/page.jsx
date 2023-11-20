import styles from "./AboutPage.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.catContainer}>
          <div className={styles.catSubContainer}>
            <Image
              src="/bg/wallhaven-o5762l_1920x1080.png"
              alt=""
              fill
              className={styles.image}
            />
            <h1 className={styles.subtitleMl}>关于我</h1>
            {/* <Bubbles /> */}
          </div>
        </div>
        <div className={styles.ItemContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="http://cdn.risingsource.top/pulscIcon/about3.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>鹏渊</h1>
            <p className={styles.desc}>
              01年的小胖子,我是一个热爱生活和创造的人，喜欢记录生活中的美好瞬间，并将它们制作成小视频或相册与亲友分享。阅读和听音乐也是我生活中不可或缺的一部分，通过书籍提高知识储备，通过音乐找到情绪的宣泄和心灵的抚慰。
            </p>
            <p className={styles.enDesc}>
              In 2001, I, a chubby person, enjoy capturing the beautiful moments
              in life and creating small videos or albums to share with family
              and friends. Reading and listening to music are also indispensable
              parts of my life. Through books, I enhance my knowledge reserve,
              while through music, I find emotional release and solace for my
              soul. I am someone who loves life and creativity, cherishing the
              beautiful moments in life and sharing them with loved ones.
              Reading and music are essential aspects of my life, enabling me to
              expand my knowledge and find emotional relief and comfort.
            </p>
          </div>
        </div>
        <div className={`${styles.ItemContainer} ${styles.people16}`}>
          <h1>
            <a href="https://www.16personalities.com/" target="blank">
              <Image src="/about-16people.svg" alt="" width={122} height={24} />
            </a>
          </h1>
          <div className={styles.people16Container}>
            <div className={styles.textContainer}>
              <p className={styles.textContainerItems}>
                <span>探险家 (ISFP-T)</span>
                <span className={styles.subtitles}>2023.11 测试</span>
              </p>
              <div className={styles.textContainerItems}>
                <div className={styles.left}>外向 26%</div>
                <i></i>
                <div className={styles.right}>内向 74%</div>
              </div>
              <div className={styles.textContainerItems}>
                <div className={styles.left}>直觉 38%</div>
                <i></i>
                <div className={styles.right}>现实 62%</div>
              </div>
              <div className={styles.textContainerItems}>
                <div className={styles.left}>逻辑 34%</div>
                <i></i>
                <div className={styles.right}>感受 66%</div>
              </div>
              <div className={styles.textContainerItems}>
                <div className={styles.left}>计划 44%</div>
                <i></i>
                <div className={styles.right}>展望 56%</div>
              </div>
              <div className={styles.textContainerItems}>
                <div className={styles.left}>坚决 33%</div>
                <i></i>
                <div className={styles.right}>谨慎 67%</div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image src={"/icon.svg"} alt="" width={260} height={260} />
            </div>
          </div>
        </div>
        <div className={styles.ItemContainer}>
          <div className={`${styles.imageContainer} ${styles.viewContainer}`}>
            <p className={styles.subtitle}>技能</p>
            <h2 className={styles.titleCodes}>开启创造力</h2>
            <div className={styles.editList}>
              <div className={styles.editItem}>
                <Image
                  src="/vue.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.vue}`}
                />
                Vue
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/vite.svg"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.vue}`}
                />
                Vite
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/webpack.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.webpack}`}
                />
                webpack
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/git.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.git}`}
                />
                git
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/node.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.node}`}
                />
                node
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/html.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.html}`}
                />
                Html
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/Css3.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.css}`}
                />
                Css
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/js.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols} ${styles.js}`}
                />
                JS
              </div>
              <div className={styles.editItem}>
                <Image
                  src="/uni-app.png"
                  alt=""
                  width={30}
                  height={30}
                  className={`${styles.imageols}`}
                />
                uni-app
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.cardList}>
              <div className={`${styles.cardItem} ${styles.wz}`}>
                <div className={styles.ItemTitleContainer}>
                  <p className={styles.subtitle}>爱好游戏</p>
                  <h2 className={styles.titleCodes}>王者荣耀</h2>
                </div>
                <div className={styles.contentContainer}>
                  <div className={styles.iconGorp}>
                    <i className={styles.fai}></i>
                    <i className={styles.faz}></i>
                  </div>
                  <p>凯</p>
                </div>
              </div>
              <div className={`${styles.cardItem} ${styles.wf}`}>
                <div className={styles.ItemTitleContainer}>
                  <p className={styles.subtitle}>爱好游戏</p>
                  <h2 className={styles.titleCodes}>Warframe</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ItemContainer}>
          <div className={`${styles.textContainer} ${styles.m_container}`}>
            <h1 className={styles.m_title}>🤷‍♀️免责声明</h1>
            <p className={styles.m_desc}>
              本站以分享互联网经验、学习知识为目的，所有文章所涉及使用的工具、资源等均来自互联网，
              仅供学习和研究使用，版权归作者所有，如果无意之中侵犯了您的版权，请来信告知。本站将在第一时间删除！另外，
              本站内的文章多为博主原创，大部分是由CSDN、掘金平台搬迁过来，用户名也是monkey-papa，仅供学习交流之用，不参与商业用途。
              遵守相关法律法规，由于本站资源部分来源于网络，开发也是使用开源框架，故无法核实资源侵权的真实性，无论出于何种目的要求本站删除内容，“您”均需要提供相关证明，否则不予处理
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
