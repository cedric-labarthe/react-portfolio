/* eslint-disable react/jsx-one-expression-per-line */

// Import modules
import { Fade } from 'react-reveal';

// Import styles
import Header from './Header';

// Import components
import './Profil.css';

const Profil = () => {
  const date = new Date();
  return (
    <section className="profil-container" id="profil">
      <Header />
      <Fade left>
        <div className="profil-content">
          <p>
            Bonjour, je suis <span className="highlight">Cédric</span>{' '}
            {`${date.getFullYear() - 1986}`} ans.
            <p>
              Je suis actuelement en formation de développeur{' '}
              <span className="highlight">Web FullStack</span> à la Wild Code
              School.{' '}
            </p>
            J&apos;aime le <span className="highlight">code</span>,
            l&apos;informatique, les nouvelles technologies, les{' '}
            <span className="highlight">défis</span> et{' '}
            <span className="highlight">aprendre</span>!
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Profil;
