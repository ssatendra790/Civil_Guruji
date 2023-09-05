/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Swiper.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

export default function Banner({}) {
  return (
    <div className={styles.courseBanner}>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        Pagination={{
          clickable: true,
        }}
        Navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bannerSwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.wallpaperup.com/uploads/wallpapers/2013/07/26/123475/9a6414458df24961311231b3bce99906-1000.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.wallpaperup.com/uploads/wallpapers/2015/01/19/590738/03184d055da164780a30798d345d4cfd-1000.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.wallpaperup.com/uploads/wallpapers/2015/03/12/635953/1ba188d8033685bff842420791059ba9-500.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}