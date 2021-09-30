import { useContext } from 'react';
import { motion } from 'framer-motion';
import { TimerContext } from '../../contexts/TimerContext';
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
    }
  },
  exit: {
    y: '100vh',
  }
}

const StartButton = () => {
  const { status, statusDispatch } = useContext(TimerContext);
  
  const startTimer = () => {
    if (status.status === 'finished') {
      statusDispatch({type: 'SET_STATUS', payload: 'initial'});
    } else {
      statusDispatch({type: 'SET_STATUS', payload: 'active'});
    }
  }

  const stopTimer = () => {
    statusDispatch({type: 'SET_STATUS', payload: 'paused'});
  }

  return (
    <motion.button
      className="start-btn"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tapped"
      onClick={(status.status !== 'active') ? startTimer : stopTimer}
    >
      {status.status === 'initial' && 'Start'}
      {status.status === 'active' && 'Pause'}
      {status.status === 'paused' && 'Resume'}
      {status.status === 'finished' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 4 15 12 5 20 5 4"/>
          <line x1="19" y1="5" x2="19" y2="19"/>
        </svg>
      )}
    </motion.button>
  );
}

export default StartButton;
