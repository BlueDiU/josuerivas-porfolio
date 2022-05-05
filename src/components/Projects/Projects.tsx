import Card from './Card';

import { projects } from './data/data';
import Skills from './Skills';

/* styles */
import './Projects.scss';

interface IProps {
  showTabs: boolean;
}

function Projects({ showTabs }: IProps) {
  return (
    <div>
      {showTabs ? (
        <div className="projects__content grid filters__active">
          {projects.map((p) => (
            <Card
              key={p.id}
              name={p.name}
              img={p.img}
              type={p.type}
              url={p.url}
            />
          ))}
        </div>
      ) : (
        <Skills />
      )}
    </div>
  );
}

export default Projects;
