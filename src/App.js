import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [filp, setFilp] = useState(false);

  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const onHours = (e) => {
    setHours(e.target.value);
  };
  const onReset = () => {
    setMinutes("");
  };

  const onFilp = () => setFilp((current) => !current);
  const setValue = minutes / 60;
  const setValue2 = hours * 60;
  return (
    <>
      <div>
        <h1>Title: React Converter</h1>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes || "" || setValue2.toFixed(2)}
          id="minutes"
          placeholder="Minutes"
          onChange={onChange}
          type="number"
          disabled={filp === true}
        />
      </div>
      <div>
        <label htmlFor="hours">hours</label>
        <input
          value={hours || setValue.toFixed(2) || ""}
          id="hours"
          placeholder="hours"
          onChange={onHours}
          type="number"
          disabled={filp === false}
        />
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFilp}>Filp</button>
    </>
  );
}

export default App;
