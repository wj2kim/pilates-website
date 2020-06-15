import React from 'react';
import About from '../components/pageBodyComponents/About';
import Portfolio from '../components/pageBodyComponents/Portfolio';
import Blog from '../components/pageBodyComponents/Blog';
import Contact from '../components/pageBodyComponents/Contact';

const PageBody = () => {
  // const contentDelimeter = <hr />;

  return (
    <div id="page-body">
      <div id="content-wrapper">
        <div id="content">
          <div id="content-about-wrapper">
            <About />
          </div>
          <div id="content-portfolio-wrapper">
            <Portfolio />
          </div>
          <div id="content-blog-wrapper">
            <Blog />
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
