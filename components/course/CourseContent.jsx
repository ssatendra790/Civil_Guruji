import { modules } from "@/helpers/constants";
import styles from "@/styles/CourseDetail.module.css";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineDown,
  AiOutlineFile,
  AiOutlineUp,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { IoMdRadioButtonOff } from "react-icons/io";
import SessionCard from "./SessionCard";

export default function CourseContent({ }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  if (!modules?.length) return;
  return (
    <div className={styles.contentWrapper}>
      <Tabs
        size="xl"
        variant="button"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab>Course Content</Tab>
          <Tab>Live Doubt Session</Tab>
          {!tabIndex ? (
            <Tab isDisabled marginLeft="auto">
              <span id={styles.longTab}>
                <span className={styles.gap}>
                  <p>43</p>
                  <AiOutlineVideoCamera />
                </span>
                <span className={styles.gap}>
                  <p>10</p>
                  <BsLaptop />
                </span>
                <span className={styles.gap}>
                  <p>64</p>
                  <AiOutlineFile />
                </span>
              </span>
            </Tab>
          ) : null}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Modules />
          </TabPanel>
          <TabPanel>
            <SessionCard isLive />
            <SessionCard />
            <SessionCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

function Modules() {
  return (
    <div className={styles.modules}>
      {modules.map((module, i) => (
        <Accordian key={i + 1} module={module} />
      ))}
    </div>
  );
}

function Accordian({ module }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: isOpen ? 16 : 0 }} className={styles.accordian}>
      <div onClick={handleClick} className={styles.accordianHeading}>
        <p>{module.title}</p>
        <span id={styles.longTab}>
          <span className={styles.gap}>
            <p>0/10</p>
            <AiOutlineVideoCamera />
          </span>
          <span className={styles.gap}>
            <p>10</p>
            <BsLaptop />
          </span>
          <span className={styles.gap}>
            <p>64</p>
            <AiOutlineFile />
          </span>
        </span>
        {isOpen ? (
          <AiOutlineUp className={styles.accIcon} />
        ) : (
          <AiOutlineDown className={styles.accIcon} />
        )}
      </div>
      {isOpen && (
        <div className={styles.topics}>
          {module.topics.map((topic, i) => (
            <Link
              href={"/course/blockchain-developer-course/SbW4TyVYeZrW73avAYbY"}
              key={i}
            >
              <div className={styles.topic}>
                {/* <IoIosRadioButtonOn className={styles.accIcon} /> */}
                <IoMdRadioButtonOff className={styles.accIcon} />
                <p>{topic.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
