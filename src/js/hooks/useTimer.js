import { useEffect, useState } from "react";

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [arrayDigits, setArrayDigits] = useState([]);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let timeInterval = "null";
    if (isActive) {
      timeInterval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(0);
    }
    setArrayDigits(Array.from(String(seconds), Number));
    //console.log(arrayDigits);
    return () => clearInterval(timeInterval);
  }, [seconds]);
  return { seconds, arrayDigits };
}
