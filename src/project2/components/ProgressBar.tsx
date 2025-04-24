const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Personal Info", "Income Details", "Review"];
  const percentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div>
      <div
        style={{
          width: `${percentage}%`,
          height: "5px",
          backgroundColor: "green",
        }}
      ></div>
      <p>
        Step {currentStep} of {steps.length}
      </p>
    </div>
  );
};

export default ProgressBar;
