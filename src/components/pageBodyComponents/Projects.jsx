import React from 'react';
import WorkList from './projectsComponents/WorkList';
import './Projects.scss';

const Projects = () => {
  return (
    <section id="content-portfolio">
      <div id="content-portfolio-title">
        <div className="link-2">Projects</div>
      </div>
      <div id="content-portfolio-body">
        <WorkList />
      </div>
    </section>
  );
};

export default Projects;
