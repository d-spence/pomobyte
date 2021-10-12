import { useContext } from 'react';
import { motion } from 'framer-motion';
import { TimerContext } from '../../contexts/TimerContext';
import { StyledPhaseButtons, PhaseButton } from './PhaseButtons.styled';
import { PHASE_TRANSITION_DELAY } from '../../config/constants';

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.5,
    border: 'none',
    transition: {
      duration: 0.5,
    }
  },
  animateActive: {
    opacity: 0.9,
    border: '1px solid var(--dark)',
    transition: {
      duration: 1,
    }
  },
  hover: {
    opacity: 1,
  }
}

const PhaseButtons = ({ setTimerFromPhase }) => {
  const { status, statusDispatch, timerDispatch } = useContext(TimerContext);

  const handlePhaseBtnClick = (phase) => {
    if (status.phase !== phase) {
      statusDispatch({type: 'SET_PHASE', payload: phase});
      statusDispatch({type: 'SET_STATUS', payload: 'initial'});
      // statusDispatch({type: 'SET_INTERVAL', payload: 1});
      setTimerFromPhase(phase);
    }
  }

  return (
    <StyledPhaseButtons as={motion.div}>
      <PhaseButton as={motion.button}
        onClick={() => handlePhaseBtnClick(1)}
        variants={buttonVariants}
        initial="initial"
        animate={(status.phase === 1) ? 'animateActive' : 'animate'}
        exit="exit"
        whileHover="hover"
        bgColor="green"
      >
        Pomodoro
      </PhaseButton>
      <PhaseButton as={motion.button}
        onClick={() => handlePhaseBtnClick(2)}
        variants={buttonVariants}
        initial="initial"
        animate={(status.phase === 2) ? 'animateActive' : 'animate'}
        exit="exit"
        whileHover="hover"
        bgColor="yellow"
      >
        Short Break
      </PhaseButton>
      <PhaseButton as={motion.button}
        onClick={() => handlePhaseBtnClick(3)}
        variants={buttonVariants}
        initial="initial"
        animate={(status.phase === 3) ? 'animateActive' : 'animate'}
        exit="exit"
        whileHover="hover"
        bgColor="red"
      >
        Long Break
      </PhaseButton>
    </StyledPhaseButtons>
  );
}

export default PhaseButtons;
