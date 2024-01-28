import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [year, setYear] = useState("--");
  const refDay = useRef(null);
  const refMonth = useRef(null);
  const refYear = useRef(null);

  const dateHandler = () => {};

  return (
    <div className="age-calculator-app">
      <div className="container">
        {/* Inputs */}
        <form className="date-container">
          <div className="date-box">
            <label>Day</label>
            <input
              ref={refDay}
              type="number"
              placeholder="DD"
              min={0}
              max={31}
            />
          </div>
          <div className="date-box">
            <label>Month</label>
            <input
              ref={refMonth}
              type="number"
              placeholder="MM"
              min={0}
              max={12}
            />
          </div>
          <div className="date-box">
            <label>Year</label>
            <input
              ref={refYear}
              type="number"
              placeholder="YYYY"
              min={0}
              max={2024}
            />
          </div>
        </form>

        {/* Line and Button */}
        <div className="button-box">
          <div className="line"></div>
          <div>
            <button className="btn" onClick={dateHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="44"
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" stroke-width="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Show result */}
        <div className="result-box">
          <p className="result-text">
            <span>{day}</span>years
          </p>
          <p className="result-text">
            <span>{month}</span>months
          </p>
          <p className="result-text">
            <span>{year}</span>days
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
