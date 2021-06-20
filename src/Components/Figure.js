import React from "react";
import images from "../images";
import "../App.css";
import { useState, useEffect } from "react";

import attempts from "../App";

const Figure = (props) => {
  useEffect(() => {
    setDrawing(`${images[props.attempts]?.image}`);
  }, [props.attempts]);
  const [drawing, setDrawing] = useState(null);
  return (
    <div>
      {drawing ? (
        <img src={drawing} />
      ) : (
        <img src="https://raw.githubusercontent.com/simonjsuh/Vanilla-Javascript-Hangman-Game/master/images/0.jpg" />
      )}
    </div>
  );
};
export default Figure;
