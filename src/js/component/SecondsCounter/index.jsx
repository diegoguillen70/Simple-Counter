import React from "react";
import "./timerStyle.css";
const SecondsCounter = () => {
  return (
    <div className="container">
      <h1 className="set-timer">
        <i class="fa-solid fa-clock"></i>
      </h1>
      <h1 className="stop-resume">
        <i class="fa-solid fa-stopwatch"></i>
      </h1>
      <h1 className="reset">
        <i class="fa-solid fa-xmark test"></i>
      </h1>
      <h1 className="digit">0</h1>
      <h1 className="digit">0</h1>
      <h1 className="digit">0</h1>
      <h1 className="digit">0</h1>
      <h1 className="digit">0</h1>
    </div>
  );
};

export default SecondsCounter;
