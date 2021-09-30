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
        {/* <p>{text}</p> */}
        <Button label="Close" onClick={() => modalDispatch({type: 'MODAL_CLOSE'})} />
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
