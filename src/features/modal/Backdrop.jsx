import { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../contexts/AppContext';
import './Backdrop.css';

const Backdrop = ({ children }) => {
  const { modalDispatch } = useContext(AppContext);

  return (
    <motion.div
      className="backdrop"
      onClick={() => modalDispatch({type: 'CLOSE_MODAL'})}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
