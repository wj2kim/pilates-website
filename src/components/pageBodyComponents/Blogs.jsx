import React from 'react';
import BlogList from './blogsComponents/BlogList';

const Blogs = () => {
  return (
    <section id="content-blog" className="container-fluid">
      <div id="content-blog-title">
        <h4>Blog</h4>
      </div>
      <div id="content-blog-body" className="container">
        <BlogList />
      </div>
    </section>
  );
};

export default Blogs;
