import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import Button from '../button/Button';
import './TimerControls.css'

dayjs.extend(duration);

const TimerControls = ({ config, setConfig, setTimer, active, setActive }) => {
  const startTimer = () => !active && setActive(true);
  const stopTimer = () => active && setActive(false);
  const resetTimer = () => setTimer(dayjs.duration(config.time, 'minutes'));

  return (
    <div className="controls">
      <Button label="Start" onClick={startTimer} />
      <Button label="Stop" onClick={stopTimer} />
      <Button label="Reset" onClick={resetTimer} />
    </div>
  );
}

export default TimerControls;
