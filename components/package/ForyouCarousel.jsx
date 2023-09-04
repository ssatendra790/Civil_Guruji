import React, { useState } from "react";
import styles from "@/styles/Swiper.module.css";
import Cardforyou from "./Cardforyou";

const packages = [["Web Development","React Developer"], ["Python","Python Developer"], ["C++","CPP Developer"], ["Flutter","Mobile Developer"], ["DSA","Data Structures"], ["CP","Competitve Programmer"]];

export default function ForyouCarousel({ title, className }) {
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles.header}>
                <h3>{title}</h3>
            </div>
            <div className="courseCards">
                {packages.map((idx) => (
                    <div
                        className="package-card" 
                        style={{ display: "inline-block", 
                        marginRight: "20px", 
                        marginBottom: "20px", 
                        }}
                    >
                        <Cardforyou packagename={idx[0]} packagedesc={idx[1]}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
