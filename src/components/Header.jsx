// Import modules
import { Fade } from 'react-reveal';

// Import styles
import './Header.css';

const Header = () => (
  <Fade>
    <div className="header-container">
      <h1 className="header-name">Cédric La Barthe</h1>
      <h2 className="header-title">Formation Développeur Web</h2>
    </div>
  </Fade>
);

export default Header;
