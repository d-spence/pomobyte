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

const PhaseButtons = () => {
  const { status } = useContext(TimerContext);

  return (
    <StyledPhaseButtons as={motion.div}>
      <PhaseButton as={motion.button}
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
