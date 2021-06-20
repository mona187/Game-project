import "./App.css";
import images from "./images";
import React, { useState } from "react";
import Home from "./Components/Home";
// import Drawing from "./Components/Drawing";

// import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
const randomNumber = () => {
  return Math.round(Math.random() * 30);
};
const theme = {
  light: {
    mainColor: "#293241",
    backgroundColor: "#34495e",
  },
  dark: {
    mainColor: "#34495e",
    backgroundColor: "#293241",
  },
};
function App() {
  const [value, setValue] = useState("");
  const [attempts, setAttempts] = useState(6);
  const [answer, setAnswer] = useState(randomNumber());
  const [results, setResults] = useState("");
  const [drawing, setDrawing] = useState("");
  // const [currentTheme, setTheme] = useState(theme.light);
  console.log(answer);
  const handleReset = () => {
    setAnswer(randomNumber());
    setAttempts(6);
    setResults("");
  };
  const handleClick = () => {
    console.log(`this is attempt ${attempts}`);

    const guess = value;
    if (guess == answer) {
      setResults(<p>Correct!</p>);
      console.log(answer);
      setAttempts(5);
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
          <p>GAME OVER,YOU LOSE! </p>
          <button onClick={handleReset}>reset</button>
        </div>
      );
      if (attempts === 6) {
        setDrawing(images[0].image);
      }
      console.log(answer);
    }
  };
  // const toggleTheme = () => {
  //   currentTheme === theme.dark ? setTheme(theme.light) : setTheme(theme.dark);
  // };
  // const themeButtonText =
  //   currentTheme === theme.dark ? "Light Mode" : "Dark Mode";
  return (
    <div className="App">
      {/* <ThemeProvider theme={currentTheme}>
        <GlobalStyle /> */}
      {/* <div> */}
      <Home attempts={attempts} />
      <img src={drawing} />
      {/* <ThemeButton onClick={toggleTheme}>{themeButtonText}</ThemeButton>
        </div> */}

      <input type="number" onChange={(event) => setValue(event.target.value)} />

      <button type="submit" onClick={handleClick}>
        GUESS
      </button>

      {results}
      {/* </ThemeProvider> */}

      {/* {attempts} */}
    </div>
  );
}

export default App;
