import React from "react";
import "./stepper.css";

const Stepper = ({ steps, activeStep }) => {
  const dots = [];
  for (var i = 0; i < steps; i++) {
    dots.push(i);
  }

  return (
    <div className="dots">
      {dots.map((dot) => {
        return (
          <div
            id={"dot" + dot + 1}
            key={dot}
            className={`dot ${
              parseInt(activeStep) === dot ? "dotActive" : null
            } `}></div>
        );
      })}
    </div>
  );
};

export default Stepper;
