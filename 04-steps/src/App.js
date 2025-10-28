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

          <StepMessage step={step}>
            {messages[step - 1]}

            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => {
                  alert(`Learn how to ${messages[step - 1]}`);
                }}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={prevCallback}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={nextCallback}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
// reusable button with children props
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
