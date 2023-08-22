import React, { useState, useEffect } from "react";
import "./timerStyle.css";
import useTimer from "../../hooks/useTimer";
import { digitConvert } from "/workspaces/Simple-Counter/src/js/functions/functions.js";
const SecondsCounter = () => {
  const { seconds, stopResume, resect } = useTimer();
  //const objectDigits = digitConvert(seconds);
  //const arrayDigits = Object.values(objectDigits);
  let arrayDigits = []; //= digitConvert(seconds);
  //console.log(arrayDigits);
  digitConvert(seconds).forEach((element, index) => {
    for (const key in element) {
      arrayDigits.push(element[key]);
    }
    //console.log(arrayDigits);
  });
  return (
    <>
      <div className="container">
        <h1 className="set-timer">
          <i className="fa-solid fa-clock"></i>
        </h1>
        <h1 className="stop-resume">
          <i className="fa-solid fa-stopwatch" onClick={() => stopResume()}></i>
        </h1>
        <h1 className="reset">
          <i className="fa-solid fa-xmark " onClick={() => resect()}></i>
        </h1>

        {arrayDigits.map((digits, index) => {
          //console.log(index);
          if (index == 0 || index == 2) {
            return (
              <>
                <h1 key={index} className="digit">
                  {digits}
                </h1>
                <h1 className="colon">:</h1>
              </>
            );
          } else {
            return (
              <>
                <h1 key={index} className="digit">
                  {digits}
                </h1>
              </>
            );
          }
        })}
      </div>
      {/*
      <div className="set-timer-box">
        <i class="fa-solid fa-circle-xmark"></i>
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <span className="button">
          <button>Set Time</button>
          <button>Cancel</button>
        </span>
      </div>*/}
    </>
  );
};

export default SecondsCounter;
