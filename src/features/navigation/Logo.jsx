import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './Logo.css';

const spanVariants = {
  initial: {
    rotateX: 90,
    background: 'none',
    color: 'var(--orange)',
  },
  animate: {
    rotateX: 0,
    background: 'var(--light)',
    color: ['var(--light)', 'var(--dark)'],
    marginLeft: '0.25rem',
    padding: '0 0.25rem',
    letterSpacing: '1.5px',
    transition: {
      duration: 0.5,
    }
  },
  animateAlt: {
    rotateX: 360,
    background: 'none',
    color: ['var(--light)', 'var(--orange)'],
    transition: {
      duration: 0.5,
    }
  },
  exit: {
    rotateX: 0,
    background: 'none',
    color: 'var(--light)',
  }
}

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const createByteString = (len=8) => {
    return Array.from(Array(len)).map(() => {
      return [0,1][Math.floor(Math.random() * 2)];
    }).join('');
  }

  return (
    <motion.div
      className="logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span>Pomo</motion.span>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
      >
        {isHovered && (
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {createByteString()}
          </motion.span>
        )}
        
        {!isHovered && (
          <motion.span
            variants={spanVariants}
            initial="initial"
            animate="animateAlt"
            exit="exit"
          >
            byte
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Logo;
