import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const defaultConfig = {
  pomoTime: 0.1, // minutes
  shortBreak: 0.05,
  longBreak: 0.07,
  breakInterval: 2,
}

export const defaultModal = {
  isOpen: false,
  text: 'test',
}

export const defaultTimer = dayjs.duration(defaultConfig.pomoTime, 'minutes');

export const defaultStatus = {
  status: 'initial', // initial, active, paused, finished
  phase: 1, // pomodoro=1, shortBreak=2, longBreak=3
  interval: 1,
  phaseTimeoutID: null,
}