import React from 'react';
import BlogList from './blogsComponents/BlogList';
import './Blogs.scss';

const Blogs = () => {
  return (
    <section id="content-blog" className="container-fluid">
      <div id="content-blog-title">
        <a className="link-2">BLOG</a>
      </div>
      <div id="content-blog-body" className="container">
        <BlogList />
      </div>
    </section>
  );
};

export default Blogs;
