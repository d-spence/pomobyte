import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './Logo.css';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const createByteString = (len=8) => {
    return Array.from(Array(len)).map(el => {
      return [0,1][Math.floor(Math.random() * 2)];
    }).join('');
  }

  let logoSpan;
  if (isHovered) {
    logoSpan = (
      <motion.span
        animate={{
          color: ['#ec5b13', '#141b1f'],
          backgroundColor: 'var(--light)',
          marginLeft: '0.25rem',
          padding: '0 0.25rem',
          letterSpacing: '1.5px',
        }}
      >
        {createByteString()}
      </motion.span>
    );
  } else {
    logoSpan = <motion.span>byte</motion.span>
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="logo"
    >
      Pomo
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
      >
        {logoSpan}
      </AnimatePresence>
    </div>
  );
}

export default Logo;
