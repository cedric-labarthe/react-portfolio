// Import modules
import { Fade } from 'react-reveal';

// Import medias
import spaceHack from '../assets/images/spacehack.png';
import biclooApp from '../assets/images/bicloo/bicloo-map.png';
import fourSpi from '../assets/images/4spi/4spi-hom.png';
import blackJack from '../assets/images/game/blackjack.png';
import sept from '../assets/images/game/sept.png';

// Import styles
import './Projects.css';

const Projects = () => (
  <section className="projects-container" id="projects">
    <Fade right>
      <h2 className="projects-title">Projets</h2>
    </Fade>
    <Fade>
      <div className="projects-content">
        <div className="card">
          <div className="info">
            <h2>Space Hackathon</h2>
            <a
              href="https://github.com/cedric-labarthe/space-hackathon.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M6 0C2.687 0 0 2.754 0 6.152c0 2.718 1.719 5.024 4.103 5.837.3.057.41-.133.41-.296 0-.146-.005-.533-.008-1.046-1.669.371-2.021-.825-2.021-.825-.273-.711-.666-.9-.666-.9-.545-.382.04-.374.04-.374.603.044.92.634.92.634.535.94 1.404.668 1.746.511.055-.397.21-.669.381-.822-1.332-.155-2.733-.683-2.733-3.04 0-.672.234-1.221.618-1.651-.062-.156-.268-.781.058-1.629 0 0 .504-.165 1.65.631A5.614 5.614 0 016 2.975a5.58 5.58 0 011.502.207c1.146-.796 1.649-.63 1.649-.63.327.847.121 1.472.06 1.628.384.43.616.979.616 1.65 0 2.364-1.403 2.884-2.74 3.036.216.19.408.565.408 1.14 0 .821-.007 1.485-.007 1.687 0 .164.108.356.412.296 2.382-.816 4.1-3.12 4.1-5.837C12 2.754 9.313 0 6 0"
                />
              </svg>
              GitHub
            </a>
          </div>
          <img src={spaceHack} alt="space hackathon" />
        </div>

        <div className="card">
          <div className="info">
            <h2>BiclooApp</h2>
            <a
              href="https://github.com/cedric-labarthe/Bicloo-App.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M6 0C2.687 0 0 2.754 0 6.152c0 2.718 1.719 5.024 4.103 5.837.3.057.41-.133.41-.296 0-.146-.005-.533-.008-1.046-1.669.371-2.021-.825-2.021-.825-.273-.711-.666-.9-.666-.9-.545-.382.04-.374.04-.374.603.044.92.634.92.634.535.94 1.404.668 1.746.511.055-.397.21-.669.381-.822-1.332-.155-2.733-.683-2.733-3.04 0-.672.234-1.221.618-1.651-.062-.156-.268-.781.058-1.629 0 0 .504-.165 1.65.631A5.614 5.614 0 016 2.975a5.58 5.58 0 011.502.207c1.146-.796 1.649-.63 1.649-.63.327.847.121 1.472.06 1.628.384.43.616.979.616 1.65 0 2.364-1.403 2.884-2.74 3.036.216.19.408.565.408 1.14 0 .821-.007 1.485-.007 1.687 0 .164.108.356.412.296 2.382-.816 4.1-3.12 4.1-5.837C12 2.754 9.313 0 6 0"
                />
              </svg>
              GitHub
            </a>
          </div>
          <img src={biclooApp} alt="biclooApp" />
        </div>

        <div className="card">
          <div className="info">
            <h2>4-Spirited-Guys</h2>
            <a
              href="https://github.com/cedric-labarthe/4-spirited-guys.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M6 0C2.687 0 0 2.754 0 6.152c0 2.718 1.719 5.024 4.103 5.837.3.057.41-.133.41-.296 0-.146-.005-.533-.008-1.046-1.669.371-2.021-.825-2.021-.825-.273-.711-.666-.9-.666-.9-.545-.382.04-.374.04-.374.603.044.92.634.92.634.535.94 1.404.668 1.746.511.055-.397.21-.669.381-.822-1.332-.155-2.733-.683-2.733-3.04 0-.672.234-1.221.618-1.651-.062-.156-.268-.781.058-1.629 0 0 .504-.165 1.65.631A5.614 5.614 0 016 2.975a5.58 5.58 0 011.502.207c1.146-.796 1.649-.63 1.649-.63.327.847.121 1.472.06 1.628.384.43.616.979.616 1.65 0 2.364-1.403 2.884-2.74 3.036.216.19.408.565.408 1.14 0 .821-.007 1.485-.007 1.687 0 .164.108.356.412.296 2.382-.816 4.1-3.12 4.1-5.837C12 2.754 9.313 0 6 0"
                />
              </svg>
              GitHub
            </a>
          </div>
          <img src={fourSpi} alt="4-spirited-guys" />
        </div>

        <div className="card">
          <div className="info">
            <h2>BlackJack</h2>
            <a
              href="https://github.com/cedric-labarthe/blackjack.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M6 0C2.687 0 0 2.754 0 6.152c0 2.718 1.719 5.024 4.103 5.837.3.057.41-.133.41-.296 0-.146-.005-.533-.008-1.046-1.669.371-2.021-.825-2.021-.825-.273-.711-.666-.9-.666-.9-.545-.382.04-.374.04-.374.603.044.92.634.92.634.535.94 1.404.668 1.746.511.055-.397.21-.669.381-.822-1.332-.155-2.733-.683-2.733-3.04 0-.672.234-1.221.618-1.651-.062-.156-.268-.781.058-1.629 0 0 .504-.165 1.65.631A5.614 5.614 0 016 2.975a5.58 5.58 0 011.502.207c1.146-.796 1.649-.63 1.649-.63.327.847.121 1.472.06 1.628.384.43.616.979.616 1.65 0 2.364-1.403 2.884-2.74 3.036.216.19.408.565.408 1.14 0 .821-.007 1.485-.007 1.687 0 .164.108.356.412.296 2.382-.816 4.1-3.12 4.1-5.837C12 2.754 9.313 0 6 0"
                />
              </svg>
              GitHub
            </a>
          </div>
          <img src={blackJack} alt="blackjack" />
        </div>

        <div className="card">
          <div className="info">
            <h2>Sept</h2>
            <a
              href="https://github.com/cedric-labarthe/sept.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M6 0C2.687 0 0 2.754 0 6.152c0 2.718 1.719 5.024 4.103 5.837.3.057.41-.133.41-.296 0-.146-.005-.533-.008-1.046-1.669.371-2.021-.825-2.021-.825-.273-.711-.666-.9-.666-.9-.545-.382.04-.374.04-.374.603.044.92.634.92.634.535.94 1.404.668 1.746.511.055-.397.21-.669.381-.822-1.332-.155-2.733-.683-2.733-3.04 0-.672.234-1.221.618-1.651-.062-.156-.268-.781.058-1.629 0 0 .504-.165 1.65.631A5.614 5.614 0 016 2.975a5.58 5.58 0 011.502.207c1.146-.796 1.649-.63 1.649-.63.327.847.121 1.472.06 1.628.384.43.616.979.616 1.65 0 2.364-1.403 2.884-2.74 3.036.216.19.408.565.408 1.14 0 .821-.007 1.485-.007 1.687 0 .164.108.356.412.296 2.382-.816 4.1-3.12 4.1-5.837C12 2.754 9.313 0 6 0"
                />
              </svg>
              GitHub
            </a>
          </div>
          <img src={sept} alt="jeu de sept" />
        </div>
      </div>
    </Fade>
  </section>
);

export default Projects;
