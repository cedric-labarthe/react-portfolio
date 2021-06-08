/* eslint-disable react/jsx-one-expression-per-line */

// Import modules
import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';

// Import styles
import Header from './Header';

// Import medias
import codeBg from '../assets/images/bg/black3-min.png';

// Import components
import './Profil.css';

const Profil = ({ scrollPos }) => {
  const date = new Date();

  return (
    <section
      className="profil-container"
      id="profil"
      style={{
        overflowY: 'hidden',
        position: 'relative',
        top: `${scrollPos * -0.09}px`,
        transition: 'all 200ms linear',
      }}
    >
      <div>
        <img
          style={{
            position: 'fixed',
            width: '100vw',
            height: '120%',
            left: '0',
            zIndex: -5,
            top: `${scrollPos * 0.1 - window.innerHeight * 0.15}px`,
            filter: 'blur(4px)  contrast(120%)',
            transition: 'all 200ms linear',
          }}
          src={codeBg}
          alt="bg-parallax"
        />
      </div>
      <Header />
      <Fade left>
        <div className="profil-content">
          <p>
            Bonjour, je suis <span className="highlight">Cédric</span>{' '}
            {`${date.getFullYear() - 1986}`} ans, actuellement en formation de{' '}
            <span className="highlight">développeur Web FullStack</span> à la
            Wild Code School de Nantes.
            <br /> Après une carrière de 10 ans en tant qu&apos;employé
            logistique dans la grande distribution, j&apos;ai enfin franchi le
            pas de la reconversion.
            <br /> Ayant quelques connaissances de programmation et une réelle
            envie de les faire grandir, le développement Web est très vite venu
            comme une évidence.
            <br /> Un an après mon inscription à la Wild Code School, j&apos;ai
            enfin pu enclencher ce changement de vie.
            <br /> Et une chose est sûre, je ne le regrette absolument pas !
            <br />
            Vous trouverez sur ce portfolio les outils et langages de
            programmation que j&apos;utilise au cours de cette formation ainsi
            que les projets auxquels j&apos;ai pu participer.
          </p>
        </div>
      </Fade>
    </section>
  );
};

Profil.propTypes = {
  scrollPos: PropTypes.number.isRequired,
};

export default Profil;
