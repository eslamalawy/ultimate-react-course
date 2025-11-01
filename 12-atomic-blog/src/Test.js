import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //   </div>
  // );

  return (
    <div>
      <h1>Slow counter?!?</h1>
      {/* when react sees this jsx:
        1) it will create the SlowComponent and pass it into Counter
        2) when you click the counter
        3) the counter rerender but the SlowComponent will not render as it already passed last time and cannot be affacted by this state update
        4) you could also pass it as a prop it will work just the same as children
        ex: <Counter showSlowComponent={<SlowComponent />}>  */}
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
