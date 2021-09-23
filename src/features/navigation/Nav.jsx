import Logo from './Logo';
import Button from '../button/Button';
import './Nav.css';

const Nav = ({ openModal }) => {
  return (
    <nav className="nav">
      <Logo />
      <Button label="About" onClick={openModal} type="navExpand" />
    </nav>
  );
}

export default Nav;
