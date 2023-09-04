/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Card.module.css";
import { useRouter } from "next/router";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsFillPlayFill, BsLaptop } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import Stars from "../Stars";

export default function Card({
  index,
  showPreview,
  mouseOver,
  mouseOut,
  transformOrigin,
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/course/blockchain-developer-course");
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <div
        className={`${styles.img} ${showPreview ? styles.scale : ""} `}
        style={{ transformOrigin }}
        onMouseOver={() => mouseOver(index)}
        onMouseOut={() => mouseOut(index)}
      >
        <div id={styles.overlay} />
        {showPreview ? (
          <>
            <iframe
              src="https://iframe.mediadelivery.net/embed/1159/08f6a19c-2bbd-485d-a9cb-8474b434373b"
              title="How does a blockchain work?"
              allow="autoplay"
              allowFullScreen
              controls="false"
              borderRadius="8px"
            ></iframe>
            <h2>Agile for SME</h2>
          </>
        ) : (
          <>
            <img
              src="https://images.unsplash.com/photo-1674191362105-a5661aec326d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NjU0NTc2Ng&ixlib=rb-4.0.3&q=80&w=600"
              alt="Course Name"
            />
            <p id={styles.hvrMsg}>Keep hovering to preview</p>
          </>
        )}

        {!showPreview ? (
          <span id={styles.isLive}>
            <BsFillPlayFill id={styles.icon} /> Live
          </span>
        ) : null}
      </div>
      <div className={styles.courseInfo}>
        <h2>Agile for SME</h2>
        <span id="rating">
          <p>
            3.5 <Stars />
          </p>
        </span>
        <p>
          <i>1500+ Enrolled</i>
        </p>
        <div className={styles.more}>
          <p>
            <AiOutlineTrophy className={styles.icon} /> Certificate
          </p>
          <p>
            <BsLaptop className={styles.icon} /> 3 Hours
          </p>
          <p id={styles.price}>
            <FaRupeeSign className={styles.icon} />
            499
          </p>
        </div>
      </div>
    </div>
  );
}
