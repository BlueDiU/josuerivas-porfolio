import {
  bGroupOne,
  bGroupTwo,
  fGroupOne,
  fGroupTwo,
} from './data';
import './Skills.scss';

function Skills() {
  return (
    <div
      className="skills__content grid"
      data-content
      id="skills"
    >
      <div className="skills__area">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            {fGroupOne.map(({ name, level }) => (
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">{name}</h3>
                  <span className="skills__level">{level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="skills__group">
            {fGroupTwo.map(({ name, level }) => (
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">{name}</h3>
                  <span className="skills__level">{level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills__area">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            {bGroupOne.map(({ name, level }) => (
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">{name}</h3>
                  <span className="skills__level">{level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {bGroupTwo.map(({ name, level }) => (
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">{name}</h3>
                  <span className="skills__level">{level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
