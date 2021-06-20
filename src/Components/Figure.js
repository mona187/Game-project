import React from "react";
import "../App.css";
import { useState } from "react";
import attempts from "../App";
const Figure = (props) => {
  const [drawing, setDrawing] = useState("");
  if (props.attempts < 5) {
    setDrawing(<circle cx="140" cy="70" r="20" className="figure-part" />);
  }
  return (
    <div>
      <svg height="250" width="200" className="figure-container">
        {/* Rod  */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />
        {/* 
    <!-- Head --> */}
        {drawing}
        {props.attempts == 6 && (
          <circle cx="140" cy="70" r="20" className="figure-part" />
        )}
        {/* <!-- Body --> */}
        {props.attempts == 5 && (
          <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />
        )}
        {/* <!-- Arms --> */}
        {props.attempts == 4 && (
          <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />
        )}
        {props.attempts == 3 && (
          <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />
        )}
        {/* <!-- Legs --> */}
        {props.attempts == 2 && (
          <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />
        )}
        {props.attempts == 1 && (
          <line x1="140" y1="150" x2="160" y2="180" class="figure-part" />
        )}
      </svg>
    </div>
  );
};
export default Figure;
