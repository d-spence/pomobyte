import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const defaultConfig = {
  pomoTime: 25, // minutes
  shortBreak: 5,
  longBreak: 15,
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