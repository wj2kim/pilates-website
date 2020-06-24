import React from 'react';
import About from '../components/pageBodyComponents/About';
import Projects from '../components/pageBodyComponents/Projects';
import Blogs from '../components/pageBodyComponents/Blogs';
import Contact from '../components/pageBodyComponents/Contact';

const PageBody = () => {
  return (
    <div id="page-body">
      <div id="content-wrapper">
        <div id="content">
          <div id="content-about-wrapper">
            <About />
          </div>
          <div id="content-portfolio-wrapper">
            <Projects />
          </div>
          <div id="content-blog-wrapper">
            <Blogs />
          </div>
          <div id="content-contact-wrapper">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBody;
