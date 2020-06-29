import React from 'react';
import WorkList from './projectsComponents/WorkList';
import './Projects.scss';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <section id="content-portfolio">
      <div id="content-portfolio-title">
        <div className="link-2">Projects</div>
      </div>
      <Fade left>
        <div id="content-portfolio-body">
          <WorkList />
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
