import { useState } from "react";
import Step1 from "./project2/components/Step1";
import ProgressBar from "./project2/components/ProgressBar";
import Step2 from "./project2/components/Step2";
import Review from "./project2/components/Review";

const PlayGround2 = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  return (
    <>
      <ProgressBar currentStep={step} />
      {step === 1 && <Step1 next={next} />} 
      {step === 2 && <Step2 next={next} prev={prev} />}
      {step === 3 && <Review prev={prev} />}
    </>
  );
};

export default PlayGround2;
