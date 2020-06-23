import React from 'react';
import './Blog.scss';

const Blog = ({ post }) => {
  const { title, url, imageUrl, preview, date } = post;
  return (
    <a href={url} target="_blank" class="single-post col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={imageUrl} alt={title + 'image'} />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-date">
          <div className="underline-effect-2">{date}</div>
        </div>
        <div class="card-body">{preview}...</div>
        <div class="card-link"></div>
      </div>
    </a>
  );
};

export default Blog;
