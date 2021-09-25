import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import Button from '../button/Button';
import './TimerControls.css'

dayjs.extend(duration);

const TimerControls = ({ config, setConfig, setTimer, timerState, setTimerState }) => {
  const [pomoTime, setPomoTime] = useState(config.pomoTime);
  const [shortBreak, setShortBreak] = useState(config.shortBreak);
  const [longBreak, setLongBreak] = useState(config.longBreak);

  const startTimer = () => {
    !(timerState === 'active') && setTimerState('active');
  }
  const stopTimer = () => {
    (timerState === 'active') && setTimerState('paused');
  }
  const resetTimer = () => {
    setTimer(dayjs.duration(config.pomoTime, 'minutes'));
    (timerState === 'active') ? setTimerState('active') : setTimerState('initial');
  }

  const handleChange = (func, value, min=1, max=999) => {
    if (!isNaN(value)) {
      if (value < min) {
        func(min);
      } else if (value > max) {
        func(max);
      } else {
        func(+value);
      }
    }
  }

  useEffect(() => {
    setConfig({ ...config, pomoTime, shortBreak, longBreak });

    if (timerState === 'initial') {
      setTimer(dayjs.duration(pomoTime, 'minutes'))
    }
  }, [pomoTime, shortBreak, longBreak]);

  return (
    <div className="controls">
      <div className="buttons flex">
        <Button label="Start" onClick={startTimer} />
        <Button label="Stop" onClick={stopTimer} />
        <Button label="Reset" onClick={resetTimer} />
      </div>

      <div className="config flex">
        <div className="flex col">
          <label>Pomodoro</label>
          <input
            value={pomoTime}
            onChange={(e) => handleChange(setPomoTime, e.target.value)}
            onClick={(e) => e.target.select()}
          />
        </div>

        <div className="flex col">
          <label>Short Break</label>
          <input
            value={shortBreak}
            onChange={(e) => handleChange(setShortBreak, e.target.value)}
            onClick={(e) => e.target.select()}
          />
        </div>

        <div className="flex col">
          <label>Long Break</label>
          <input
            value={longBreak}
            onChange={(e) => handleChange(setLongBreak, e.target.value)}
            onClick={(e) => e.target.select()}
          />
        </div>
      </div>

      <div>Minutes</div>
    </div>
  );
}

export default TimerControls;
