// Import modules
import PropTypes from 'prop-types';

const ProjectCard = ({
  name,
  description,
  tools,
  image,
  githubURL,
  demoURL,
}) => (
  <div className="card">
    <div className="info">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{tools}</p>
      <div className="info-link-container">
        {githubURL ? (
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
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
        ) : null}
        {demoURL ? (
          <a href={demoURL} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 0 22 22"
              width="30"
              fill="currentColor"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
            </svg>
            Démo
          </a>
        ) : null}
      </div>
    </div>
    <img src={image} alt={name} />
  </div>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
  demoURL: PropTypes.string.isRequired,
};

export default ProjectCard;
