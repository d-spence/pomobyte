import { motion } from 'framer-motion';
import './Button.css';

const expand = {
  hovered: {
    scale: 1.05,
  },
  tapped: {
    scale: 0.95,
  },
}

const navExpand = {
  hovered: {
    letterSpacing: '5px',
    padding: '0 0.5rem',
    backgroundColor: 'var(--orange)',
  },
  tapped: {
    scaleX: 0.9,
  }
}

const Button = ({ label, onClick, type }) => {
  return (
    <>
      {type === 'expand' && (
        <motion.button
          onClick={onClick}
          className="button"
          variants={expand}
          whileHover="hovered"
          whileTap="tapped"
        >
          {label}
        </motion.button>
      )}

      {type === 'navExpand' && (
        <motion.button
          onClick={onClick}
          className="button"
          variants={navExpand}
          initial="initial"
          whileHover="hovered"
          whileTap="tapped"
        >
          {label}
        </motion.button>
      )}
    </>
  );
}

Button.defaultProps = {
  label: 'default',
  onClick: () => null,
  type: 'expand',
}

export default Button;
