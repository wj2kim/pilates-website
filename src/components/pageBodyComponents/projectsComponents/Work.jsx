import React from 'react';
import './Work.scss';

const Work = ({ project, openModal }) => {
  const { title, thumbnailImage } = project;

  return (
    <div className="single-work work col s12 m6 l6 xl4">
      <div className="card card-image" style={{ margin: 0 }}>
        <div className="card-image work-image">
          <img
            src={thumbnailImage}
            style={{ objectFit: 'cover' }}
            alt={title + 'image'}
          />
          <p className="title">{title}</p>
          <div className="overlay"></div>
          <div className="button">
            <a href="#modal-detail" onClick={() => openModal(project)}>
              DETAIL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
