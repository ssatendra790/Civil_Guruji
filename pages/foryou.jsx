import React, { useEffect } from "react";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Explore.module.css";
import CourseCarousel from "@/components/course/CourseCarousel";
import PackageCarousel from "@/components/package/PackageCarousel";
import ForyouCarousel from "@/components/package/ForyouCarousel";

export default function Explore() {
  return (
    <Layout>  
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.content}>
          <ForyouCarousel title="▱ Recent Purchase" />
          <PackageCarousel title="▱ Bookmarked Packages" />
          <CourseCarousel title="▱ Completed Courses" />
        </div>
      </div>
    </Layout>
  );
}
