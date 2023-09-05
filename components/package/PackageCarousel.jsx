import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from "./Card";
import styles from "@/styles/Swiper.module.css";

import "swiper/css/free-mode";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const packages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PackageCarousel({ title, className, hideBtn }) {
  const [preview, setPreview] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  let timer;

  const mouseOver = (num) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setPreview(num);
      clearTimeout(timer);
    }, [1200]);
  };

  const mouseOut = () => {
    if (timer) clearTimeout(timer);
    setPreview(null);
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("reachEnd", () => {
        setIsEnd(true);
      });
    }
  }, [swiper]);


  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!hideBtn ?( 
          <Link href="/AllPackage">
              <Button variant="ghost">View All</Button>
          </Link>)
          : null}
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        modules={[Navigation]}
        className="courseCards"
        navigation={true}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {packages.map((idx) => (
          <SwiperSlide key={idx} style={{ zIndex: preview === idx ? 2 : 1 }}>
            <Card
              index={idx}
              showPreview={preview === idx}
              mouseOver={mouseOver}
              mouseOut={mouseOut}
              transformOrigin={
                idx == 1 ? "left" : packages.length == idx ? "right" : "center"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
