import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const [filp, setFilp] = useState(false);

  const onChange = (e) => setAmount(e.target.value);
  const onReset = () => setAmount(0);
  const onFilp = () => {
    onReset();
    setFilp((current) => !current);
  };

  return (
    <>
      <div>
        <h1>Title: React Converter</h1>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={filp ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          onChange={onChange}
          type="number"
          disabled={filp}
        />
      </div>
      <div>
        <label htmlFor="hours">hours</label>
        <input
          value={filp ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="hours"
          onChange={onChange}
          type="number"
          disabled={!filp}
        />
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFilp}>Filp</button>
    </>
  );
}

export default App;
