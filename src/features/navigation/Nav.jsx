import Logo from './Logo';
import Button from '../button/Button';
import './Nav.css';

const Nav = ({ handleOpenModal }) => {
  return (
    <nav className="nav">
      <Logo />
      <Button label="About" onClick={handleOpenModal} type="navExpand" />
    </nav>
  );
}

export default Nav;
