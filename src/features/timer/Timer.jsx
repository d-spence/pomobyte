import { useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { AppContext } from '../../contexts/AppContext';
import Clock from './Clock';
import './Timer.css';

const activeAnim = {
  initial: {
    y: 0
  },
  animate: {
    y: '100px',
    scale: 1.2,
    opacity: 1,
    duration: 0.5
  }
}

const pausedAnim = {
  initial: {
    opacity: 0.1
  },
  animate: {
    opacity: [0.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const timerAnim = {
  initial: {
    x: '150vw',
    scaleX: 4
  },
  animate: {
    x: 0,
    scaleX: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring'
    }
  },
  exit: {
    x: '-100vw',
    scaleX: 3
  }
}

const timerStateAnim = {
  initial: {
    x: '-150vw',
  },
  animate: {
    x: 0,
    scaleX: 1,
    transition: {
      delay: 0.4,
      duration: 1,
      type: 'spring'
    }
  }
}

const Timer = ({ timer, timerState, phase }) => {
  const { config } = useContext(AppContext);
  let formattedTime = timer.format('HH:mm:ss');

  useEffect(() => {
    formattedTime = timer.format('HH:mm:ss');
  }, [config]);

  return (
    <motion.div
      className="timer"
      variants={timerAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="timer-state"
        variants={timerStateAnim}
        initial="initial"
        animate="animate"
      >
        {timerState === 'initial' && 'Pomobyte'}
        {timerState === 'active' && 'Running'}
        {timerState === 'paused' && 'Paused'}
        {timerState === 'finished' && 'Done'}
      </motion.div>

      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
      >
        {timerState === 'active' &&
          <motion.div 
            className="time green"
            variants={activeAnim}
            initial="initial"
            animate="animate"
          >
            {formattedTime}
          </motion.div>
        }

        {timerState === 'paused' &&
          <motion.div 
            className="time yellow"
            variants={pausedAnim}
            initial="initial"
            animate="animate"
          >
            {formattedTime}
          </motion.div>
        }

        {timerState === 'finished' &&
          <motion.div
            className="time red"
            variants={pausedAnim}
            initial="initial"
            animate="animate"
          >
            {formattedTime}
          </motion.div>
        }

        {timerState === 'initial' &&
          <motion.div className="time">
            {formattedTime}
          </motion.div>
        }
      </AnimatePresence>
      
      <Clock timer={timer} timerState={timerState} phase={phase} />
    </motion.div>
  );
}

export default Timer;
