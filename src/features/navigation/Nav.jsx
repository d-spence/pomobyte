import { motion } from 'framer-motion';
import Button from '../button/Button';
import './Nav.css';

const Nav = ({ handleOpenModal }) => {
  return (
    <nav className="nav">
      <div className="logo">
        Pomo
        <motion.span
          whileHover={{ color: '#ec5b13', backgroundColor: '#e6e6e6', letterSpacing: '5px'}}
        >
          byte
        </motion.span>
      </div>
      <Button label="About" onClick={handleOpenModal} type="navExpand" />
    </nav>
  );
}

export default Nav;
