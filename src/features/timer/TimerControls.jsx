import { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { AppContext } from '../../contexts/AppContext';
import { TimerContext } from '../../contexts/TimerContext';

import Button from '../button/Button';
import StartButton from '../button/StartButton';
import './TimerControls.css'

dayjs.extend(duration);

const TimerControls = ({ setTimerFromPhase }) => {
  const { config, configDispatch } = useContext(AppContext);
  const { status, timerDispatch, statusDispatch } = useContext(TimerContext);
  const [pomoTime, setPomoTime] = useState(config.pomoTime);
  const [shortBreak, setShortBreak] = useState(config.shortBreak);
  const [longBreak, setLongBreak] = useState(config.longBreak);
  const [breakInterval, setBreakInterval] = useState(config.breakInterval);

  const resetTimer = () => {
    setTimerFromPhase();

    if (status.status === 'active') {
      statusDispatch({type: 'SET_STATUS', payload: 'active'});
    } else {
      statusDispatch({type: 'SET_STATUS', payload: 'initial'});
    }
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
    const newConfig = { pomoTime, shortBreak, longBreak, breakInterval };
    configDispatch({type: 'UPDATE_CONFIG', payload: newConfig});
  }, [pomoTime, shortBreak, longBreak, breakInterval]);

  return (
    <div className="controls">
      <StartButton />

      <div className="buttons">
        <Button label="+1 Minute" onClick={() => timerDispatch({type: 'ADD_MINUTES', payload: 1})} />
        <Button label="Reset" onClick={resetTimer} />
      </div>

      <h4>Minutes</h4>
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

      <div className="config-other">
        <label>Intervals Before Long Break</label>
        <input
          value={breakInterval}
          onChange={(e) => handleConfigChange(setBreakInterval, e.target.value)}
          onClick={(e) => e.target.select()}
        />
      </div>
      
    </div>
  );
}

export default TimerControls;
