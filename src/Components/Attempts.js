import randomNumber from "../App";

import React, { useState } from "react";
var counter = 0;
var Maxtries = 5;
const Attempts = () => {
  const [attempts, setAttempts] = useState(counter);

  while (attempts !== randomNumber) {
    counter += 1;
    if (counter > Maxtries) return setAttempts(<p>Game Over Loser</p>);
    break;
  }

  {
    Attempts();
  }
};
export default Attempts;
// function checkGuess() {
//   if (guessCount === 1) {
//     return <p>Previous guesses </p>;
//   }
//   guessCount += value + " ";
//   if (guessCount === 5) {
//     return <p>!!!GAME OVER!!!</p>;
//   }
// }
// {
//   checkGuess();
// }
// export default checkGuess;
