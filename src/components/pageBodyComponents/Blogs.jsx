import React from 'react';
import BlogList from './blogsComponents/BlogList';
import './Blogs.scss';
import Fade from 'react-reveal/Fade';

const Blogs = () => {
  return (
    <section id="content-blog" className="container-fluid">
      <div id="content-blog-title">
        <div className="link-2">Blog</div>
      </div>
      <Fade left>
        <div id="content-blog-body">
          <BlogList />
        </div>
      </Fade>
    </section>
  );
};

export default Blogs;
