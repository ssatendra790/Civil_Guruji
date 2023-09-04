// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
// import Card from "./Card";
// import styles from "@/styles/Swiper.module.css";

// import "swiper/css/free-mode";
// import { Button } from "@chakra-ui/react";

// const courses = [1, 2, 3, 4, 5, 6];

// export default function CourseCarousel({ title, className, hideBtn }) {
//   const [preview, setPreview] = useState(null);

//   let timer;

//   const mouseOver = (num) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       setPreview(num);
//       clearTimeout(timer);
//     }, [1200]);
//   };

//   const mouseOut = () => {
//     if (timer) clearTimeout(timer);
//     setPreview(null);
//   };

//   return (
//     <div className={`${styles.container} ${className}`}>
//       <div className={styles.header}>
//         <h3>{title}</h3>
//         {!hideBtn ? <Button variant="ghost">View All</Button> : null}
//       </div>
//       <Swiper
//         slidesPerView={"auto"}
//         spaceBetween={20}
//         freeMode={true}
//         modules={[FreeMode]}
//         className="courseCards"
//       >
//         {courses.map((idx) => (
//           <SwiperSlide key={idx} style={{ zIndex: preview === idx ? 2 : 1 }}>
//             <Card
//               index={idx}
//               showPreview={preview === idx}
//               mouseOver={mouseOver}
//               mouseOut={mouseOut}
//               transformOrigin={
//                 idx == 1 ? "left" : courses.length == idx ? "right" : "center"
//               }
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


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

export default function CourseCarousel({ title, className, hideBtn }) {
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
