import SessionCard from "@/components/course/SessionCard";
import Layout from "@/components/reusable/Layout";
import { modules } from "@/helpers/constants";
import styles from "@/styles/Topic.module.css";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiOutlineBulb,
  AiOutlineDown,
  AiOutlineFile,
  AiOutlineUp,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { BiCommentDetail, BiCube } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsLaptop,
  BsListNested,
  BsPlayBtn,
  BsSearch,
} from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { IoMdRadioButtonOff } from "react-icons/io";

export default function Topic({ topic, course }) {
  return (
    <Layout>
      <div className={styles.container}>
        <SideNav modules={modules} />
        <div className={styles.markdown}>
          <div className={styles.breadcrumbs}>
            <Link href="/explore">Explore</Link>
            <span>{">"}</span>
            <Link href="/course/blockchain-developer-course">
              Blockchain Developer course
            </Link>
            <span>{">"}</span>
            <Link
              href={`/course/blockchain-developer-course/SbW4TyVYeZrW73avAYbY`}
            >
              How does a blockchain work?
            </Link>
          </div>
          <h1 id={styles.title}>How does a blockchain work?</h1>
          <div className={styles.iframe}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/1159/08f6a19c-2bbd-485d-a9cb-8474b434373b"
              title="How does a blockchain work?"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.topicInfo}>
            <Tabs variant="button">
              <TabList>
                <Tab>
                  <span className={styles.tab}>
                    <AiOutlineBulb />
                    <p>Description</p>
                  </span>
                </Tab>
                <Tab>
                  <span className={styles.tab}>
                    <BiCommentDetail />
                    <p>Comment</p>
                  </span>
                </Tab>
                <Tab>
                  <span className={styles.tab}>
                    <BiCube />
                    <p>3D Models</p>
                  </span>
                </Tab>
                <Tab>
                  <span className={styles.tab}>
                    <ImAttachment />
                    <p>Attachment</p>
                  </span>
                </Tab>
                <Tab>
                  <span className={styles.tab}>
                    <BsPlayBtn />
                    <p>Live Class</p>
                  </span>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia voluptas quod porro, fuga nostrum minima
                    reprehenderit exercitationem quae repellat modi molestiae
                    quos, nobis quisquam? Beatae magni ab quos pariatur sit?
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>Coming Soon!</p>
                </TabPanel>
                <TabPanel>
                  <p>Coming Soon!</p>
                </TabPanel>
                <TabPanel>
                  <p>Coming Soon!</p>
                </TabPanel>
                <TabPanel>
                  <SessionCard isLive />
                  <SessionCard />
                  <SessionCard />
                  <SessionCard />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

          <div className={styles.cta}>
            <div className={styles.prev}>
              <Button leftIcon={<BsArrowLeft />} variant="outline" isDisabled>
                Previous
              </Button>
              <p>Why do we need blockchain?</p>
            </div>
            <div className={styles.next}>
              <Button
                rightIcon={<BsArrowRight />}
                disabled={false}
                variant="outline"
              >
                Next
              </Button>
              <p>Mempool, Polyscan, Etherscan</p>
            </div>
          </div>
        </div>
        {/* <Navigator slug={topic.slug} /> */}
      </div>
    </Layout>
  );
}

function SideNav({ modules }) {
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleBack = () => {
    router.push(`/course/Blockchain Developer course`);
  };

  let searchModules = modules.filter((module) => {
    let bool = false;
    module.topics.forEach((topic) => {
      if (topic.title.toLowerCase().includes(search.toLowerCase())) bool = true;
    });

    return bool;
  });

  return (
    <>
      <div onClick={handleNav} className={styles.floatBtn}>
        <BsListNested />
      </div>
      <div className={`${styles.nav} ${!showNav ? styles.hide : ""}`}>
        <div onClick={handleBack} className={styles.back}>
          <BsArrowLeft />
          <p>Back To Course Home</p>
        </div>
        <div className={styles.search}>
          <BsSearch className={styles.searchIcon} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Topic"
          />
        </div>
        <div className={styles.modules}>
          {searchModules.map((module, i) => (
            <Accordian key={i} module={module} />
          ))}
        </div>
      </div>
    </>
  );
}

function Accordian({ module }) {
  const [showTopics, setShowTopics] = useState(true);
  const router = useRouter();

  const handleSwitch = () => {
    setShowTopics(!showTopics);
  };

  const id = router.query.id;

  return (
    <>
      <div onClick={handleSwitch} className={styles.heading}>
        {showTopics ? (
          <AiOutlineUp className={styles.arrowDown} />
        ) : (
          <AiOutlineDown className={styles.arrowDown} />
        )}
        <p>{module.title}</p>
        <span className={styles.gap}>
          <p>0/10</p>
          <BsPlayBtn />
        </span>
      </div>
      {showTopics && (
        <div style={{ marginBottom: 20 }} className={styles.topics}>
          {module.topics.map((topic) => (
            <div
              key={topic.id}
              className={`${styles.topic} ${
                topic.id === id ? styles.active : ""
              }`}
            >
              {/* <IoIosRadioButtonOn className={styles.accIcon} /> */}
              <IoMdRadioButtonOff className={styles.accIcon} />
              <p>{topic.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
