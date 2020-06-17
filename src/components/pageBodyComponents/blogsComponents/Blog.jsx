import React from 'react';
import './Blog.scss';

const Blog = () => {
  return (
    <div id="blog" class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="images/test3.jpg" alt="" />
        </div>
        <div className="card-title">
          <h4>This is title</h4>
        </div>
        <div className="card-date">
          <p>June 26, 2020</p>
        </div>
        <div class="card-body" style={{ borderTop: '1px solid #cfcfcf' }}>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div class="card-link">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
