import { motion } from 'framer-motion';
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

const Clock = ({ config, timer, timerState }) => {
  const timeTotalMs = config.time * 60 * 1000;
  const timeLeftMs = timer.$ms;
  const percentage = timeLeftMs / timeTotalMs;
  console.log(percentage);

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
      scale: percentage,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    animateActive: {
      scale: percentage,
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
          animate={timerState === 'active' ? 'animate' : 'animatePaused'}
        />
        <motion.circle
          className="svg-fg"
          cx="200"
          cy="200"
          r="198"
          variants={circleVariants}
          initial="initial"
          animate={timerState === 'active' ? 'animateActive' : 'initial'}
        />
      </motion.svg>
    </motion.div>
  );
}

export default Clock;
