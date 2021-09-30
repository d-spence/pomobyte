import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Logo from './Logo';
import Button from '../button/Button';
import './Nav.css';

const Nav = () => {
  const { modalDispatch } = useContext(AppContext);

  return (
    <nav className="nav">
      <Logo />
      <Button label="About" onClick={() => modalDispatch({type: 'MODAL_OPEN'})} type="navExpand" />
    </nav>
  );
}

export default Nav;
