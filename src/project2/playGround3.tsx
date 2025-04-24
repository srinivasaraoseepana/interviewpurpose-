import React, { useState } from "react";
import AadhaarStep from "../kwikpaymultistep/components/AadhaarStep";
import MobileStep from "../kwikpaymultistep/components/MobileStep";
import OtpStep from "../kwikpaymultistep/components/OtpStep";
import StatusMessage from "../kwikpaymultistep/components/StatusMessage";
import PanStep from "../kwikpaymultistep/components/PanStep";
import PersonalDetails from "../kwikpaymultistep/components/PersonalDetails";
import EmploymentDetails from "../kwikpaymultistep/components/EmploymentDetails";
import AddressStep from "../kwikpaymultistep/components/AddressStep";
import LocationStep from "../kwikpaymultistep/components/LocationStep";
import VideoKycStep from "../kwikpaymultistep/components/VideoKycStep";
import FinalAcknowledgment from "../kwikpaymultistep/components/FinalAcknowledgment";
import ProgressBar from "../kwikpaymultistep/components/ProgressBar";

type Props = {};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AadhaarStep next={next} />;
      case 2:
        return <MobileStep next={next} />;
      case 3:
        return <OtpStep next={next} />;
      case 4:
        return <PanStep next={next} />;
      case 5:
        return <PersonalDetails next={next} />;
      case 6:
        return <EmploymentDetails next={next} />;
      case 7:
        return <AddressStep next={next} />;
      case 8:
        return <LocationStep next={next} />;
      case 9:
        return <VideoKycStep next={next} />;
      case 10:
        return <FinalAcknowledgment />;
      default:
        return <h2>Invalid Step</h2>;
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Credit Card Application</h1>
      <div>
        <ProgressBar totalSteps={10} currentStep={step} />
      </div>

      {renderStep()}
      {step > 1 && step < 10 && (
        <button
          onClick={prev}
          style={{
            marginTop: "20px",
            backgroundColor: "#ccc",
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default MultiStepForm;
