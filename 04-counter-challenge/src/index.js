// entry point must named index.js regarding webpack bundler
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const btnMinusStepHandler = () => {
    setStep((s) => s - 1);
  };
  const btnPlusStepHandler = () => {
    setStep((s) => s + 1);
  };

  const btnMinusCountHandler = () => {
    setCount((c) => c - step);
  };
  const btnPlusCountHandler = () => {
    setCount((c) => c + step);
  };
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={btnMinusStepHandler}>-</button>
        <span>Step: {step}</span>
        <button onClick={btnPlusStepHandler}>+</button>
      </div>

      <div>
        <button onClick={btnMinusCountHandler}>-</button>
        <span>Count: {count}</span>
        <button onClick={btnPlusCountHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
