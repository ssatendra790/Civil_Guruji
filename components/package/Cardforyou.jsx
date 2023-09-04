/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Card.module.css";
import { useRouter } from "next/router";
import { AiOutlineNumber } from "react-icons/ai";
import { BsFillPlayFill, BsLaptop } from "react-icons/bs";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";

export default function Cardforyou({
  packagename,
  packagedesc,
  showPreview,
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/package/blockchain-development-bootcamp");
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <div>
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
            <h2>Web 3.0</h2>
          </>
        ) : (
          <>
            <img
              src="https://images.unsplash.com/photo-1554774853-b3d587d95440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80"
              alt="Course Name"
            />
          </>
        )}

        {!showPreview ? (
          <span id={styles.isLive}>
            <BsFillPlayFill id={styles.icon} /> Live
          </span>
        ) : null}
      </div>
      <div className={styles.courseInfo}>
        <h2>{packagename}</h2>
        <p>{packagedesc}</p>
        <div className={styles.more}>
          <p>
            <TiSortAlphabeticallyOutline className={styles.icon} /> Hindi
          </p>
          <p>
            <BsLaptop className={styles.icon} /> 3 Hours
          </p>
          <p>
            <AiOutlineNumber className={styles.icon} />4 Courses
          </p>
        </div>
      </div>
    </div>
  );
}
