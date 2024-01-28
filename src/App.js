import "./App.css";

function App() {
  return (
    <div className="age-calculator-app">
      <div className="container">
        <form className="date-box">
          <label>Day</label>
          <input type="number" min={0} max={21} />
          <label>Month</label>
          <input type="number" min={0} max={12} />
          <label>Year</label>
          <input type="number" min={0} max={2024} />
        </form>
      </div>
      <div className="button-box">
        <hr />
      </div>
      <div className="result-box">
        <p>
          <span>38</span>years
        </p>
        <p>
          <span>3</span>months
        </p>
        <p>
          <span>26</span>days
        </p>
      </div>
    </div>
  );
}

export default App;
