import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState();
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const setValue = minutes / 60;
  return (
    <>
      <h1>Title: React Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes || ""}
        id="minutes"
        placeholder="Minutes"
        onChange={onChange}
        type="number"
      />

      <label htmlFor="hours">hours</label>
      <input
        value={setValue.toFixed(2)}
        id="hours"
        placeholder="hours"
        type="number"
        readOnly
      />
    </>
  );
}

export default App;
