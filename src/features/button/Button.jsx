import { motion } from 'framer-motion';
import './Button.css';

const expand = {
  initial: {
    scale: 1,
    background: 'var(--dark)',
    color: 'var(--light)',
  },
  hovered: {
    scale: 1.05,
    background: 'var(--green)',
    color: 'var(--dark)',
  },
  tapped: {
    scale: 0.95,
  },
}

const navExpand = {
  initial: {
    background: 'var(--dark)',
    color: 'var(--light)',
  },
  hovered: {
    background: 'var(--green)',
    color: 'var(--dark)',
    letterSpacing: '5px',
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
          initial="initial"
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
