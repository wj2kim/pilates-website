import React from 'react';
import WorkList from './projectsComponents/WorkList';
import './Projects.scss';

const Projects = () => {
  return (
    <section id="content-portfolio" className="container-fluid">
      <div id="content-portfolio-title">
        <a herf="#" className="link-2">
          PROJECTS
        </a>
      </div>
      <div id="content-portfolio-body">
        <WorkList />
      </div>
    </section>
  );
};

export default Projects;
