import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import './Timer.css';

// const timeMinutes = 5;
// const time = dayjs.duration(timeMinutes, 'minutes');

const Timer = ({ timer }) => {
  return (
    <div className="timer">
      <div className="time">{timer.format('HH:mm:ss')}</div>
    </div>
  );
}

export default Timer;
