import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import React, { useState } from "react";
import Home from "./Components/Home";
function App() {
  let randomNumber = Math.round(Math.random() * 10);
  const GuessTheNumber = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState("");
    const onClick = () => {
      const guess = parseInt(value, setValue);
      if (guess === randomNumber) setResults(<p>Correct!</p>);
      else if (guess > randomNumber) setResults(<p>Too high,guess again</p>);
      else if (guess < randomNumber) setResults(<p>Too low,guess again</p>);
    };
  };
  return (
    <div className="App">
      <Home />

      <input
        value={value}
        type="number"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
    </div>
  );
}

export default App;
