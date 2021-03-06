// Import modules
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { MemoryRouter as Router } from 'react-router-dom';

// Import styles
import './Navbar.css';

const Navbar = ({ scrollTop }) => (
  <div
    className={scrollTop ? 'navbar-container' : 'navbar-container-hidden'}
    style={{
      backgroundImage: 'url(/nav-bg.jpg)',
      backgroundSize: 'cover',
    }}
  >
    <Router history="/">
      <HashLink smooth to="/pathLink#profil">
        Profil
      </HashLink>
      <HashLink smooth to="/pathLink#skills">
        Skills
      </HashLink>
      <HashLink smooth to="/pathLink#projects">
        Projets
      </HashLink>
      <HashLink smooth to="/pathLink#contacts">
        Contact
      </HashLink>
    </Router>
  </div>
);

Navbar.propTypes = {
  scrollTop: PropTypes.bool.isRequired,
};

export default Navbar;
