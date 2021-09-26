import { motion } from 'framer-motion';
import {  } from 'react-icons/'
import './StartButton.css';

const buttonVariants = {
  initial: {
    background: 'var(--light)',
    color: 'var(--clock)',
    borderColor: 'var(--dark)',
    rotate: 0,
    scale: 1,
    y: '100vh',
  }, 
  animate: {
    rotate: 0,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring'
    }
  },
  hover: {
    background: 'var(--green)',
    color: 'var(--dark)',
    borderColor: 'var(--green)',
    rotate: [0, 30, -20, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
  tapped: {
    background: 'var(--green)',
    color: 'var(--dark)',
    borderColor: 'var(--green)',
    scale: 0.95,
    transition: {
      duration: 0.2,
      // ease: 'ease',
    }
  },
  exit: {
    y: '100vh',
  }
}

const StartButton = ({ startTimer, stopTimer, timerState }) => {
  const handleOnClick = (timerState !== 'active') ? startTimer : stopTimer;

  return (
    <motion.button
      className="start-btn"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tapped"
      onClick={handleOnClick}
    >
      {timerState === 'initial' && 'Start'}
      {timerState === 'active' && 'Pause'}
      {timerState === 'paused' && 'Resume'}
      {timerState === 'finished' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-forward">
          <polygon points="5 4 15 12 5 20 5 4"/>
          <line x1="19" y1="5" x2="19" y2="19"/>
        </svg>
      )}
    </motion.button>
  );
}

export default StartButton;
