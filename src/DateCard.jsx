import { useState } from "react";

function DateCard() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const date = new Date();
  const futureDate = new Date();
  futureDate.setDate(date.getDate() + count);

  function stepsForward() {
    setSteps((prev) => prev + 1);
  }

  function stepsBackward() {
    if (steps > 1) setSteps((prev) => prev - 1);
  }

  function countBackward() {
    setCount((prev) => prev - steps);
  }

  function countForward() {
    setCount((prev) => prev + steps);
  }

  return (
    <>
      <h1>Welcome to React {date.toDateString()}</h1>

      <div>
        <button onClick={stepsBackward}>-</button>
        Steps : {steps}
        <button onClick={stepsForward}>+</button>
      </div>

      <div>
        <button onClick={countBackward}>-</button>
        Count : {count}
        <button onClick={countForward}>+</button>
      </div>

      <div>{`${count} days from ${date.toDateString()} is ${futureDate.toDateString()}`}</div>
    </>
  );
}

export default DateCard;
