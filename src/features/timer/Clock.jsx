import { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../contexts/AppContext';
import { TimerContext } from '../../contexts/TimerContext';
import './Clock.css';

const svgVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

// TODO: Move Clock component up to App
const Clock = () => {
  const { config } = useContext(AppContext);
  const { timer, status } = useContext(TimerContext);

  const getTotalTime = () => {
    let totalTime;
    switch (status.phase) {
      case 1: totalTime = config.pomoTime; break;
      case 2: totalTime = config.shortBreak; break;
      case 3: totalTime = config.longBreak; break;
      default: totalTime = config.pomoTime;
    }

    return totalTime;
  }

  const timeTotalMs = getTotalTime() * 60 * 1000;
  const timeLeftMs = timer.$ms;
  const percentage = Math.round((timeLeftMs / timeTotalMs) * 100) / 100;
  // console.log(percentage);

  const circleVariants = {
    initial: {
      scale: 0,
      rotateY: 0,
      transition: {
        duration: 0.5
      }
    },
    animate: {
      scale: 1,
      rotateY: 180,
      transition: {
        duration: 0.5,
        ease: 'linear',
      }
    },
    animatePaused: {
      scale: (percentage > 1) ? 1 : percentage,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    animateActive: {
      scale: (percentage > 1) ? 1 : percentage,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    },
    animateFinished: {
      scale: [0, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  }

  return (
    <motion.div className="clock">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        variants={svgVariants}
        initial="initial"
        animate="animate"
      >
        <motion.circle
          className="svg-bg"
          cx="200"
          cy="200"
          r="198"
          variants={circleVariants}
          initial="initial"
          animate={status.status === 'active' ? 'animate' : 'animatePaused'}
        />
        <motion.circle
          className="svg-fg"
          cx="200"
          cy="200"
          r="198"
          variants={circleVariants}
          initial="initial"
          animate={status.status === 'active' ? 'animateActive' : 'initial'}
        />
      </motion.svg>
    </motion.div>
  );
}

export default Clock;
