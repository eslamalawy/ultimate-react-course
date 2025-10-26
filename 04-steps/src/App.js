import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const prevCallback = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const nextCallback = () => {
    // if (step < 3) setStep(step + 1);
    if (step < 3) {
      // setStep(step + 1);
      // setStep(step + 1);
      // the above will not update the state twice- instead just once
      // to solve that you should set by call back function [works]
      // setStep((s)=> s + 1)
      setStep((s) => s + 1);
      // use this approach when you will depend on your last value of state
    }
    // BAD PRACTICE
    // step +=1
  };

  const closeCallback = () => {
    setIsOpen((is) => !is);
  };
  return (
    <>
      <button className="close" onClick={closeCallback}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={prevCallback}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextCallback}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
