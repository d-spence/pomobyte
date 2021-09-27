import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Button from '../button/Button';
import StartButton from '../button/StartButton';
import './TimerControls.css'

dayjs.extend(duration);

const TimerControls = ({
  config,
  setConfig,
  setTimer,
  timerState,
  setTimerState,
  setTimerFromPhase,
}) => {
  const [pomoTime, setPomoTime] = useState(config.pomoTime);
  const [shortBreak, setShortBreak] = useState(config.shortBreak);
  const [longBreak, setLongBreak] = useState(config.longBreak);

  const startTimer = () => {
    if (timerState === 'finished') {
      setTimerFromPhase();
    }

    !(timerState === 'active') && setTimerState('active');
  }

  const stopTimer = () => {
    (timerState === 'active') && setTimerState('paused');
  }

  const resetTimer = () => {
    setTimerFromPhase();

    (timerState === 'active') ? setTimerState('active') : setTimerState('initial');
  }

  const handleConfigChange = (func, value, min=0, max=999) => {
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
    const newConfig = { ...config, pomoTime, shortBreak, longBreak };
    setConfig(newConfig);
    
    localStorage.setItem('config', JSON.stringify(newConfig));
    console.log('saving config to local storage');
  }, [pomoTime, shortBreak, longBreak]);

  return (
    <div className="controls">
      <StartButton startTimer={startTimer} stopTimer={stopTimer} timerState={timerState} />

      <div className="buttons">
        <Button label="Reset" onClick={resetTimer} />
      </div>

      <div className="config flex">
        <div className="flex col">
          <label>Pomodoro</label>
          <input
            value={pomoTime}
            onChange={(e) => handleConfigChange(setPomoTime, e.target.value)}
            onClick={(e) => e.target.select()}
          />
        </div>

        <div className="flex col">
          <label>Short Break</label>
          <input
            value={shortBreak}
            onChange={(e) => handleConfigChange(setShortBreak, e.target.value)}
            onClick={(e) => e.target.select()}
          />
        </div>

        <div className="flex col">
          <label>Long Break</label>
          <input
            value={longBreak}
            onChange={(e) => handleConfigChange(setLongBreak, e.target.value)}
            onClick={(e) => e.target.select()}
          />
        </div>
      </div>

      <div>Minutes</div>
    </div>
  );
}

export default TimerControls;
