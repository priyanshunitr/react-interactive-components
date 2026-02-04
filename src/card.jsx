import { useState } from "react";
import "./Card.css";

const messages = ["1st Message", "2nd Message", "3rd Message"];

function Card() {
  // const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function nextStep() {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }
  return (
    <div className="card">
    <button className="close" onClick={() => setIsOpen((prev) => !prev)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousStep}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
