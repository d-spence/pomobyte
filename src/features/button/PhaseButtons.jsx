import { useContext } from 'react';
import { motion } from 'framer-motion';
import { TimerContext } from '../../contexts/TimerContext';
import { StyledPhaseButtons, PhaseButton } from './PhaseButtons.styled';
import { PHASE_TRANSITION_DELAY } from '../../config/constants';

const buttonVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    backgroundColor: 'var(--light)',
  },
  animate: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0.5,
    backgroundColor: 'var(--light)',
    transition: {
      duration: 0.5,
    }
  },
  animatePomodoro: {
    x: 140,
    y: 40,
    scale: 1.2,
    opacity: 0.8,
    backgroundColor: 'var(--green)',
    transition: {
      backgroundColor: {
        duration: 2,
      }
    }
  },
  animateShortBreak: {
    x: 0,
    y: 40,
    scale: 1.2,
    opacity: 0.8,
    backgroundColor: 'var(--yellow)',
    transition: {
      backgroundColor: {
        duration: 2,
      }
    }
  },
  animateLongBreak: {
    x: -140,
    y: 40,
    scale: 1.2,
    opacity: 0.8,
    backgroundColor: 'var(--red)',
    transition: {
      backgroundColor: {
        duration: 2,
      }
    }
  },
  hover: {
    opacity: 1,
  },
  exit: {

  }
}

const PhaseButtons = () => {
  const { status } = useContext(TimerContext);

  return (
    <StyledPhaseButtons as={motion.div}>
      <PhaseButton as={motion.button}
        variants={buttonVariants}
        initial="initial"
        animate={(status.phase === 1) ? 'animatePomodoro' : 'animate'}
        exit="exit"
        whileHover="hover"
      >
        Pomodoro
      </PhaseButton>
      <PhaseButton as={motion.button}
        variants={buttonVariants}
        initial="initial"
        animate={(status.phase === 2) ? 'animateShortBreak' : 'animate'}
        exit="exit"
        whileHover="hover"
      >
        Short Break
      </PhaseButton>
      <PhaseButton as={motion.button}
        variants={buttonVariants}
        initial="initial"
        animate={(status.phase === 3) ? 'animateLongBreak' : 'animate'}
        exit="exit"
        whileHover="hover"
      >
        Long Break
      </PhaseButton>
    </StyledPhaseButtons>
  );
}

export default PhaseButtons;
