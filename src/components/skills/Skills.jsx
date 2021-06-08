// Import modules
import { Fade } from 'react-reveal';

// Import styles
import './Skills.css';

// Import components
import SkillCard from './SkillCard';
import svgList from './svgList';

// TODO Add Sass SCRUM?

const Skills = () => (
  <section className="skills-container" id="skills">
    <Fade left>
      <h2 className="skills-title">Compétences</h2>
    </Fade>
    <Fade cascade>
      <div className="skills-content">
        {svgList.map((skill) => (
          <SkillCard name={skill.name} svg={skill.svg} />
        ))}
      </div>
    </Fade>
  </section>
);

export default Skills;
