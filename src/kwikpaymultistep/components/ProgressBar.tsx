interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = Math.round((currentStep / totalSteps) * 100);

  const styles = {
    container: {
      height: "10px",
      width: "100%",
      backgroundColor: "#e0e0e0",
      borderRadius: "5px",
      overflow: "hidden",
      marginBottom: "20px",
    },
    filler: {
      height: "100%",
      width: `${progress}%`,
      backgroundColor: "#00b894",
      transition: "width 0.3s ease-in-out",
    },
    label: {
      textAlign: "right" as const,
      fontSize: "12px",
      color: "#555",
      marginBottom: "5px",
    },
  };

  return (
    <div>
      <div style={styles.label}>
        Step {currentStep} of {totalSteps} ({progress}%)
      </div>
      <div style={styles.container}>
        <div style={styles.filler}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
