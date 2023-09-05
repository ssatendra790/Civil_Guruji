import React, { useEffect } from "react";
import Layout from "@/components/reusable/Layout";
import styles from "@/styles/Explore.module.css";
import ViewAllCarousel from "@/components/course/ViewAllCarousel";

export default function AllPackage() {
  return (
    <Layout>  
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.content}>
            <ViewAllCarousel title="▱ Recent Purchase" />
        </div>
      </div>
    </Layout>
  );
}
