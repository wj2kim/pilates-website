import React from 'react';
import './Blog.scss';

const Blog = ({ post }) => {
  const { title, url, imageUrl, preview, date } = post;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="single-post col s12 m6"
    >
      <div className="card">
        <div className="card-image">
          <img src={imageUrl} alt={title + 'image'} />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-date">
          <div className="underline-effect-2">{date}</div>
        </div>
        <div className="card-body">{preview}...</div>
        <div className="card-link"></div>
      </div>
    </a>
  );
};

export default Blog;
