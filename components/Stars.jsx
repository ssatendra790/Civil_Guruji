import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import styles from "@/styles/CourseDetail.module.css";

export default function Stars() {
  return (
    <span className={styles.stars}>
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarHalf />
      <BsStar />
    </span>
  );
}
