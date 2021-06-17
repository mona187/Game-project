import "./App.css";

import React, { useState } from "react";
import Home from "./Components/Home";

const randomNumber = () => {
  return Math.round(Math.random() * 30);
};

function App() {
  const [value, setValue] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [answer, setAnswer] = useState(randomNumber());
  const [results, setResults] = useState("");

  console.log(answer);
  const handleReset = () => {
    setAnswer(randomNumber());
    setAttempts(4);
    setResults("");
  };
  const handleClick = () => {
    console.log(`this is attempt ${attempts}`);

    const guess = value;
    if (guess == answer) {
      setResults(<p>Correct!</p>);
      console.log(answer);
      setAttempts(4);
    } else if (guess > answer && attempts > 0) {
      setResults(
        <p>Too high,guess again,you still have {attempts} attempts</p>
      );
      setAttempts(attempts - 1);
    } else if (guess < answer && attempts > 0) {
      setResults(<p>Too low,guess again,you still have {attempts} attempts</p>);
      setAttempts(attempts - 1);
    }
    // } else return setResults("");
    else if (attempts == 0) {
      setResults(
        <div>
          <p>GAME OVER,YOU LOSE! </p>{" "}
          <button onClick={handleReset}>reset</button>
        </div>
      );
      console.log(answer);
    }
  };

  return (
    <div className="App">
      <Home />
      <input type="number" onChange={(event) => setValue(event.target.value)} />
      <button type="submit" onClick={handleClick}>
        GUESS
      </button>
      {results}
      {/* {attempts} */}
    </div>
  );
}

export default App;
