/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Login.module.css";
import {
  Button,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

export default function Auth({ isPopup, onClose }) {
  const [step, setStep] = useState(1);
  const back = () => {
    setStep((prev) => {
      if (prev == 1) return prev;
      return prev - 1;
    });
  };

  const nextStep = () => {
    setStep((prev) => {
      if (prev == 4) return prev;
      return prev + 1;
    });
  };

  return (
    <div className={`${styles.content} ${isPopup ? styles.modal : ""}`}>
      {isPopup ? (
        <button onClick={onClose} className={styles.close}>
          {/* <AiOutlineClose className={styles.closeIcon} /> */}
          Close
        </button>
      ) : null}
      {step == 1 ? (
        <StepOne back={back} nextStep={nextStep} isPopup={isPopup} />
      ) : null}
      {step == 2 ? (
        <StepTwo back={back} nextStep={nextStep} isPopup={isPopup} />
      ) : null}
      {step == 3 ? <StepThree nextStep={nextStep} isPopup={isPopup} /> : null}
      {step == 4 ? <StepFour isPopup={isPopup} onClose={onClose} /> : null}
    </div>
  );
}

function StepOne({ back, nextStep, isPopup }) {
  const handleNext = () => {
    toast.success("OTP Sent.");
    nextStep();
  };

  return (
    <div className={styles.step}>
      <p>Login with OTP</p>
      <Input type="tel" placeholder="+91" size="lg" />
      <div className={styles.cta}>
        <Button onClick={handleNext}>Send OTP</Button>
      </div>
    </div>
  );
}

function StepTwo({ back, nextStep, isPopup }) {
  const handleNext = () => {
    toast.success("Authenticated.");
    nextStep();
  };

  return (
    <div className={styles.step}>
      <p>Enter OTP</p>
      <HStack>
        <PinInput
          size="lg"
          type="alphanumeric"
          placeholder=""
          focusBorderColor="purple.200"
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Text color="gray">Resend in 10 Seconds</Text>
      <div className={styles.cta}>
        <Button variant="outline" onClick={back}>
          Back
        </Button>
        <Button onClick={handleNext}>Submit</Button>
      </div>
    </div>
  );
}

function StepThree({ back, nextStep, isPopup }) {
  const handleNext = () => {
    toast.success("Your data is secured.");
    nextStep();
  };

  return (
    <div className={styles.step}>
      <p>Name</p>
      <Input placeholder="Harsh Pandey" size="lg" />
      <p>Email</p>
      <Input type="email" placeholder="coding.harshp@gmail.com" size="lg" />
      <p>Date of Birth</p>
      <Input type="date" placeholder="Harsh Pandey" size="lg" />
      <p>Year of Passing</p>
      <Input
        type="number"
        min="1900"
        max="2099"
        step="1"
        placeholder="Harsh Pandey"
        size="lg"
      />

      <div className={styles.cta}>
        {/* <Button colorScheme="whiteAlpha" variant="outline" onClick={back}>
          Back
        </Button> */}
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

const questions = [
  {
    que: "Greatest developer of all time?",
    options: [
      { opt: "Harsh Pandey", img: "" },
      { opt: "VSP Anirudh", img: "" },
    ],
  },
  {
    que: "Best framework for Front-end?",
    options: [
      { opt: "Nextjs", img: "" },
      { opt: "Angular", img: "" },
    ],
  },
  {
    que: "Worst React Native library?",
    options: [
      { opt: "Nativebase", img: "" },
      { opt: "Nativebase", img: "" },
    ],
  },
];

function StepFour({ isPopup, onClose }) {
  const [queNum, setQueNum] = useState(0);
  const [selected, setSelected] = useState({});
  const router = useRouter();

  const prevQue = () => {
    if (queNum === 0) {
      return;
    }

    setQueNum((prev) => prev - 1);
  };

  const nextQue = () => {
    if (queNum === questions.length - 1) {
      submit();
      return;
    }

    setQueNum((prev) => prev + 1);
  };

  const submit = async () => {
    await toast.promise(
      new Promise((res) =>
        setTimeout(() => {
          res();
        }, [3000])
      ),
      {
        loading: "Generating Courses for you",
        success: <b>Done, All the best!</b>,
        error: <b>Some error occured</b>,
      }
    );
    router.push("/explore");
    if (isPopup) onClose();
  };

  const progress = Math.floor(((queNum + 1) / questions.length) * 100);
  const question = questions[queNum];
  return (
    <>
      <Progress
        borderRadius={4}
        size="sm"
        value={progress}
        background="#151515"
        colorScheme="purple"
      />
      <div className={styles.step}>
        <p id={styles.que}>{question?.que}</p>
        <div className={styles.options}>
          {question?.options.map((opt, idx) => (
            <span
              className={selected[queNum] === opt.opt ? styles.selected : ""}
              onClick={() => {
                setSelected((prev) => ({ ...prev, [queNum]: opt.opt }));
              }}
              key={idx}
            >
              <img
                src={`https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${opt.opt}`}
                alt=""
              />
              <p>{opt.opt}</p>
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          <Button variant="outline" onClick={prevQue}>
            Back
          </Button>
          <Button onClick={nextQue}>Next</Button>
        </div>
      </div>
    </>
  );
}
