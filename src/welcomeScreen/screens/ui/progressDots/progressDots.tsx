import React from "react";
import "./progressDots.css";

interface ProgressDotsProps {
  steps: number;
  currentStep: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ steps, currentStep }) => {
  return (
      <div className="makeItCenter progressDots">
        {Array.from({ length: steps }, (_, index) => (
          <div
            key={index}
            data-test={`dot${index === currentStep ? " active" : ""}`}
            className={`dot${index === currentStep ? " active" : ""}`}
          />
        ))}
      </div>
  );
};

export default ProgressDots;