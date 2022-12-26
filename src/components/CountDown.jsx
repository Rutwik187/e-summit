import React, { useState, useRef, useEffect } from "react";
import styles from "../style";
import "./CountDown.css";

const CountDown = () => {
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  // const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = () => {
    const countDown = new Date("January 9,2023").getTime();
    const now = new Date().getTime();
    const total = countDown - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (24 * 60 * 60 * 1000));

    if (now < 0) {
      clearInterval(interval.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }

    return total, days, minutes, hours, seconds;
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds, days } = getTimeRemaining(e);
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    // setTimer("00:00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-center  leading-10 text-3xl`}>
          Event Starting Soon...
        </h2>
        <div className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[30px] text-center flex justify-center">
          <div className="ss:m-4 m-2">
            {timerDays}
            {" :"}
            <p className="flex-1 font-poppins font-medium ss:text-[30px] text-[10px] text-white flex items-center text-center">
              Days
            </p>
          </div>
          <div className="ss:m-4 m-2">
            {timerHours}
            {" :"}
            <p className="flex-1 font-poppins font-medium ss:text-[30px] text-[10px] text-whit flex items-center text-center">
              Hours
            </p>
          </div>
          <div className="ss:m-4 m-2">
            {timerMinutes}
            {" :"}
            <p className="flex-1 font-poppins font-medium ss:text-[30px] text-[10px] text-white flex items-center text-center">
              Minutes
            </p>
          </div>
          <div className="ss:m-4 m-2">
            {timerSeconds}{" "}
            <p className="flex-1 font-poppins font-medium ss:text-[30px] text-[10px] text-white flex items-center text-center">
              Seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
