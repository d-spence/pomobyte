import { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../contexts/AppContext';
import Backdrop from './Backdrop';
import Button from '../button/Button';
import './Modal.css';

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const Modal = () => {
  const { modalDispatch } = useContext(AppContext);

  return (
    <Backdrop>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Longer breaks can be taken after several pomodoro intervals.</p>
        <p>By breaking a task up into short work periods interspersed by breaks, a person's assimilation of knowledge and understanding may be improved.</p>
        <p>For more info on the technique, see the full <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noreferrer">Wikipedia article.</a></p>
        <p>See the project source code on <a href="https://github.com/d-spence/pomobyte" target="_blank" rel="noreferrer">GitHub.</a></p>
        <p>Pomobyte created by <a href="https://danspencer.dev/" target="_blank" rel="noreferrer">Dan Spencer.</a></p>
        <Button label="Close" onClick={() => modalDispatch({type: 'CLOSE_MODAL'})} />
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
