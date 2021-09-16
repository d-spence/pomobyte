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
    backgroundColor: '#ec5b13',
  },
  tapped: {
    scale: 0.95,
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
