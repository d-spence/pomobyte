import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import Nav from './features/navigation/Nav';
import Timer from './features/timer/Timer';
import TimerControls from './features/timer/TimerControls';
import Modal from './features/modal/Modal';

dayjs.extend(duration);

const initialConfig = {
  pomoTime: 0.2,
  shortBreak: 0.1,
  longBreak: 0.3,
  breakInterval: 2,
}

const initialTimer = dayjs.duration(initialConfig.pomoTime, 'minutes');

function App() {
  const [config, setConfig] = useState(initialConfig);
  const [timer, setTimer] = useState(initialTimer);
  const [timerState, setTimerState] = useState('initial'); // initial, active, paused, finished
  const [phase, setPhase] = useState(1); // pomodoro=1, shortBreak=2, longBreak=3
  const [currentInterval, setCurrentInterval] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const updateTimer = () => {
    if (timer.asSeconds() <= 0) {
      console.log('timer finished')
      setTimerState('finished');
    } else {
      let updatedTime = timer.subtract(1, 'seconds');
      setTimer(updatedTime);
    }
  }

  const handlePhaseTransition = () => {
    if (timerState !== 'finished') {
      return;
    }

    if (phase === 1) {
      if (currentInterval + 1 > config.breakInterval) {
        console.log('Starting Phase 3 (Long Break)...');
        setPhase(3);
      } else {
        console.log('Starting Phase 2 (Short Break)...');
        setPhase(2);
      }
    } else if (phase === 2) {
      console.log('Starting Phase 1 (Pomodoro)...');
      setPhase(1);
      setCurrentInterval(currentInterval + 1);
    } else if (phase === 3) {
      setPhase(1);
      setCurrentInterval(1);
    }
  }

  const setTimerFromPhase = () => {
    let resetTime = config.pomoTime;

    if (phase === 2) {
      resetTime = config.shortBreak;
    } else if (phase === 3) {
      resetTime = config.longBreak;
    }

    setTimer(dayjs.duration(resetTime, 'minutes'));
  }

  useInterval(() => {
    if (timerState === 'active') updateTimer();
  }, 1000);

  useEffect(() => {
    handlePhaseTransition();
  }, [timerState]);

  return (
    <>
      <div className="container flex col">
        <Nav openModal={openModal} />
        <div>Timer State: {timerState} - Phase: {phase} - Current Interval: {currentInterval}/{config.breakInterval}</div>
        <Timer
          config={config}
          timer={timer}
          timerState={timerState}
        />
        <TimerControls
          config={config}
          setConfig={setConfig}
          setTimer={setTimer}
          timerState={timerState}
          setTimerState={setTimerState}
          setTimerFromPhase={setTimerFromPhase}
        />
      </div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={closeModal} />}
      </AnimatePresence>
    </>
  );
}

export default App;
