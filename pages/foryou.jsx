import React, { useEffect } from "react";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Explore.module.css";
import ForyouCarousel from "@/components/package/ForyouCarousel";
import CourseCarouselForyou from "@/components/course/CourseCarouselForyou";

export default function Explore() {
  return (
    <Layout>  
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.content}>
          <ForyouCarousel title="▱ Recent Purchase" />
          <CourseCarouselForyou title="▱ Completed Courses" />
        </div>
      </div>
    </Layout>
  );
}
