import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core"; // Import Navigation module

import Card from "./Card";
import styles from "@/styles/Swiper.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Button } from "@chakra-ui/react";

SwiperCore.use([Navigation]);

const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CourseCarouselForyou({ title, className, hideBtn }) {
  const [preview, setPreview] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  const mouseOver = (num) => {
    setPreview(num);
  };

  const mouseOut = () => {
    setPreview(null);
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("reachEnd", () => {
        setIsEnd(true);
      });
    }
  }, [swiper]);

  const handleViewAllClick = () => {
    if (swiper && !isEnd) {
      swiper.slideNext();
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!hideBtn ? (
          <Button
            variant="ghost"
            onClick={handleViewAllClick}
            disabled={isEnd}
          >
            View All
          </Button>
        ) : null}
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="courseCards"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {courses.map((idx) => (
          <SwiperSlide key={idx}>
            <Card
              index={idx}
              showPreview={preview === idx}
              mouseOver={mouseOver}
              mouseOut={mouseOut}
              transformOrigin={
                idx === 1 ? "left" : idx === courses.length ? "right" : "center"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
