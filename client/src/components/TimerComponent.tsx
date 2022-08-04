import React, { useEffect, useState } from 'react';
import Timer from '../models/Timer';

const timer = new Timer();
const TimerComponent = () => {
  const [time, setTime] = useState(timer.timeFormatted);
  useEffect(() => {
    timer.start();
    setInterval(() => {
      setTime(timer.timeFormatted);
    }, 500);
  }, []);
  return <div>{time}</div>;
};

export default TimerComponent;
