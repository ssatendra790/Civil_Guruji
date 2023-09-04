import React, { useEffect } from "react";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Explore.module.css";
import CourseCarousel from "@/components/course/CourseCarousel";
import Banner from "@/components/course/Banner";
import PackageCarousel from "@/components/package/PackageCarousel";
import Categories from "@/components/course/Categories";

export default function Explore() {
  return (
    <Layout>  
      <div className={`wrapper ${styles.container}`}>
        <Banner/> 
        {/* <Categories/> */}
        <div className={styles.content}>
          <CourseCarousel title="Online Courses" />
          <PackageCarousel title="Top Packages" />
          <CourseCarousel title="Free Courses" />
        </div>
      </div>
    </Layout>
  );
}
