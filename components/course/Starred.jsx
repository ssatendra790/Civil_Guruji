import React, { useEffect } from "react";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Explore.module.css";
import CourseCarousel from "@/components/course/CourseCarousel";
import Banner from "@/components/course/Banner";
import PackageCarousel from "@/components/package/PackageCarousel";

export default function Starred() {
  return (
    <Layout>  
      <div className={`wrapper ${styles.container}`}>
        <Banner/>  
        
        <div className={styles.content}>
          <CourseCarousel title="Online Courses" />
          <PackageCarousel title="Top Packages" />
          <CourseCarousel title="Free Courses" />
        </div>
      </div>
    </Layout>
  );
}
