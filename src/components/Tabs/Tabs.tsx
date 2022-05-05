import { useState } from 'react';

import Projects from '../Projects';

/* styles */
import './Tabs.scss';

function Tabs() {
  const [showTabs, setShowTabs] = useState<boolean>(true);

  const handleTabs = () => {
    setShowTabs(!showTabs);
  };

  const classActive = showTabs;

  return (
    <>
      <ul className="filters__content">
        <button
          className={`filters__button ${
            classActive && 'filter-tab-active'
          }`}
          onClick={handleTabs}
        >
          Projects
        </button>
        <button
          className={`filters__button ${
            !classActive && 'filter-tab-active'
          }`}
          onClick={handleTabs}
        >
          Skills
        </button>
      </ul>

      <div className="filters__sections">
        <Projects showTabs={showTabs} />
      </div>
    </>
  );
}

export default Tabs;
