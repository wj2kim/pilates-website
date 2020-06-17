import React from 'react';
import Blog from './Blog';

const Blogs = () => {
  return (
    <div className="blog-list row" style={{ padding: '1.5rem' }}>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default Blogs;
