import React from 'react';
import './Blog.scss';

const Blog = ({ post }) => {
  const { title, url, imageUrl, preview, date } = post;
  return (
    <div class="single-post col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={imageUrl} alt={title + 'image'} />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-date">
          <a className="underline-effect-2">{date}</a>
        </div>
        <div class="card-body">{preview}...</div>
        <div class="card-link">
          <a href="#" className="cta">
            <span>Take a look</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
