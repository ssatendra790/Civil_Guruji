import React, { useEffect } from "react";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Explore.module.css";
import CourseCarousel from "@/components/course/CourseCarousel";
import Banner from "@/components/course/Banner";
import PackageCarousel from "@/components/package/PackageCarousel";

export default function Explore() {

  return (
    <Layout>  
      <div className={`wrapper ${styles.container}`}>
        <div className="hidden sm:block"> 
          <Banner/> 
        </div> 
        <div className={styles.content}>
          <CourseCarousel title="▱ Trending Courses" />
          <PackageCarousel title="▱ Online Packages" />
          <CourseCarousel title="▱ Free Courses" />
        </div>
      </div>
    </Layout>
  );
}
