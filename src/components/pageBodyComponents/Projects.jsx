import React from 'react';
import WorkList from './projectsComponents/WorkList';

const myWorks = [
  {
    id: 1,
    type: 'React',
    thumbnail: '/images/test1.jpeg',
  },
  {},
  {},
  {},
];

const Projects = () => {
  return (
    <section id="content-portfolio" className="container-fluid">
      <div id="content-portfolio-title">
        <h4>Projects</h4>
      </div>
      <div id="content-portfolio-body">
        <WorkList />
      </div>
    </section>
  );
};

export default Projects;
