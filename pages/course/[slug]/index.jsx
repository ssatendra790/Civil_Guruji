import CourseCarousel from "@/components/course/CourseCarousel";
import CourseContent from "@/components/course/CourseContent";
import CourseFloatCard from "@/components/course/CourseFloatCard";
import CourseInfo from "@/components/course/CourseInfo";
import Layout from "@/components/reusable/Layout";
import Stars from "@/components/Stars";
import useScrollObserver from "@/hooks/useScrollObserver";
import styles from "@/styles/CourseDetail.module.css";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function CourseDetail({}) {
  const { ref, visible } = useScrollObserver();
  return (
    <Layout
      customHeader={!visible ? <></> : null}
      childrenHeight={!visible ? "100vh" : ""}
    >
      {!visible ? (
        <div className={styles.nav}>
          <div>
            <h3>Blockchain Developer course</h3>
            <span id="rating">
              <p>
                3.5 <Stars />
              </p>
              <p>(1200)</p>
            </span>
          </div>
          <Button>Enroll in Course</Button>
        </div>
      ) : null}
      <div className={`wrapper ${styles.container}`}>
        <div className={styles.breadcrumbs}>
          <Link href="/explore">Explore</Link>
          <span>{">"}</span>
          <Link href={`/course/blockchain-developer-course`}>
            Blockchain Developer course
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.courseInfo}>
              <h1 ref={ref}>Blockchain Developer course</h1>
              <p>
                Learn how to build Web3 apps and become an awesome blockchain
                developer
              </p>

              <span id="rating">
                <p>
                  3.5 <Stars />
                </p>
                <p>(1200)</p>
              </span>
              <div className={styles.metaInfo}>
                {/* <p>Created by Civil Guruji</p> */}
                <p>Last updated December 10, 2022</p>
              </div>
            </div>
            <CourseInfo />
            <CourseContent />
          </div>
          <CourseFloatCard />
        </div>
        <CourseCarousel title="Similar Related course" />
      </div>
    </Layout>
  );
}
