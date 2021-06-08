// Import modules
import PropTypes from 'prop-types';

const SkillCard = ({ name, svg }) => (
  <div className="skill-container">
    <div className="skill-badge">
      <div>{svg}</div>
    </div>
    <p>{name}</p>
  </div>
);

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  svg: PropTypes.objectOf(PropTypes.element).isRequired,
};

export default SkillCard;
