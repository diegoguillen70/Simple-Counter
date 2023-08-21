import React, { useState, useEffect } from "react";
import "./timerStyle.css";
import useTimer from "../../hooks/useTimer";
import { digitConvert } from "/home/diego/Documents/Git Repository/React/Simple-Counter/src/js/functions/functions.js";
const SecondsCounter = () => {
  const { seconds, arrayDigits } = useTimer();

  return (
    <div className="container">
      <h1 className="set-timer">
        <i className="fa-solid fa-clock"></i>
      </h1>
      <h1 className="stop-resume">
        <i className="fa-solid fa-stopwatch"></i>
      </h1>
      <h1 className="reset">
        <i className="fa-solid fa-xmark test"></i>
      </h1>
      {arrayDigits.map((digit, item) => {
        return (
          <h1 key={item} className="digit">
            {digit}
          </h1>
        );
      })}
    </div>
  );
};

export default SecondsCounter;
