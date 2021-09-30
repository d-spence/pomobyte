import { createContext, useReducer } from 'react';
import { timerReducer } from '../reducers/timerReducer';
import { statusReducer } from '../reducers/statusReducer';
import { defaultTimer, defaultStatus } from '../config/defaults';

export const TimerContext = createContext();

const TimerContextProvider = (props) => {
  const [timer, timerDispatch] = useReducer(timerReducer, defaultTimer);
  const [status, statusDispatch] = useReducer(statusReducer, defaultStatus);

  return (
    <TimerContext.Provider value={{ timer, timerDispatch, status, statusDispatch }}>
      {props.children}
    </TimerContext.Provider>
  );
}

export default TimerContextProvider;
