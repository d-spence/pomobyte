import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import Button from '../button/Button';
import './TimerControls.css'

dayjs.extend(duration);

const TimerControls = ({ config, setConfig, setTimer, timerState, setTimerState }) => {
  const startTimer = () => {
    !(timerState === 'active') && setTimerState('active');
  }
  const stopTimer = () => {
    (timerState === 'active') && setTimerState('paused');
  }
  const resetTimer = () => {
    setTimer(dayjs.duration(config.time, 'minutes'));
    (timerState === 'active') ? setTimerState('active') : setTimerState('initial');
  }

  return (
    <div className="controls">
      <Button label="Start" onClick={startTimer} />
      <Button label="Stop" onClick={stopTimer} />
      <Button label="Reset" onClick={resetTimer} />
    </div>
  );
}

export default TimerControls;
