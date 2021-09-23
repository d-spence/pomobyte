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
  time: 5,
  breakShort: 15,
  breakLong: 30,
}

const initialTimer = dayjs.duration(initialConfig.time, 'minutes');

function App() {
  const [config, setConfig] = useState(initialConfig);
  const [timer, setTimer] = useState(initialTimer);
  const [timerState, setTimerState] = useState('initial'); // initial, active, paused, finished
  // const [active, setActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const updateTimer = () => {
    let updatedTime = timer.subtract(1, 'seconds');
    setTimer(updatedTime);
  }

  useInterval(() => {
    if (timerState === 'active') updateTimer();
  }, 1000);

  useEffect(() => {
    // startTimer();
  }, []);

  return (
    <>
      <div className="container flex">
        <Nav openModal={openModal} />
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
