import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  {
    /* Trop d'anglais en Programation faut que ca cesse XD */
  }
  const [nom, setnom] = useState("Vallenstriker");
  const [age, setage] = useState("22");

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">
          Mise a jour des données directement via un imput
        </h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name:{nom} </p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="William"
            onChange={(e) => setnom(e.target.value)}
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="38"
            onChange={(e) => setage(e.target.value)}
          />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
