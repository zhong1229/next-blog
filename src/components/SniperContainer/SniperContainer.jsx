"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";
import styles from "./SniperContainer.module.css";
import Link from "next/link";

const SniperContainer = ({ Posts }) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: ".mySwiper" }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {Posts &&
          Posts.map((item) => (
            <SwiperSlide className={"dark-layer"} key={item.id}>
              <div className={"imageContainer"}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={"image"}
                />
              </div>
              <div className={"textContainer"}>
                <h2 className={"title"}>
                  <span className={styles.textContent}> {item.title}</span>
                  <span className={"span"}>{item.catSlug}</span>
                </h2>
                <div
                  className={"textContent"}
                  dangerouslySetInnerHTML={{
                    __html: item?.desc.substring(0, 180).trim(),
                  }}
                ></div>
                <Link href={`/posts/${item.slug}`}>
                  <button className={"readBtn"}>
                    阅读更多{" "}
                    <Image
                      src="/rightIcon.svg"
                      alt=""
                      width={12}
                      height={12}
                      className={"icons"}
                    />
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {Posts &&
          Posts.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={"swiper-imageContainer"}>
                <Image src={item.img} alt="" fill />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SniperContainer;
