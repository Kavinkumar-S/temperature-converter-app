import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsius = (e) => {
    console.log("eee", e);
    setCelsius(e);
    setFahrenheit((celsius * 9) / 5 + 32);
  };
  const handleFahrenheit =(e)=>{
    setFahrenheit(e);
    setCelsius(fahrenheit-32 * 5/9 )

  }

  return (
    <div className="App">
      <div className="temperature-outer-container">
        <div className="temperature-container">
          <div>
            <p>
              <label>enter value in Celsius</label>
            </p>
            <input
              type="number"
              onChange={(e) => handleCelsius(e.target.value)}
              defaultValue={celsius}
            />
          </div>
          <div className="border-line"></div>
          <div>
            <p>
              <label>enter value in fahrenheit</label>
            </p>
            <input type="number" 
            defaultValue={fahrenheit}
            onChange={(e)=>handleFahrenheit(e.target.value)} />
          </div>
        </div>
        <div className="">
          <p>value in celsius is {celsius}</p>

          <p>value in fahrenheit is {fahrenheit} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
