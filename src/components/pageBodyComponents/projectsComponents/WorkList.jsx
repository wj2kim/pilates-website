import React, { useState, useEffect, useRef } from 'react';
import Work from './Work';
import M from 'materialize-css';
import './WorkList.scss';
import data from '../../../data/projects.json';

const WorkList = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const sliderEl = useRef();
  let modalInstance = null;

  useEffect(() => {
    setLoading(true);
    setProjects(data);
    setLoading(false);
  }, []);

  const initiateModal = () => {
    modalInstance = M.Modal.init(document.querySelector('.modal'), {
      onCloseEnd: () => {
        modalInstance.close();
        setSliderInstance(null);
        setDetail(null);
      },
    });
    modalInstance.open();
  };

  const initiateSlider = () => {
    const sliderOptions = {
      indicators: false,
      interval: 6000,
    };
    setSliderInstance(M.Slider.init(sliderEl.current, sliderOptions));
  };

  const movePrevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sliderInstance.prev();
  };

  const moveNextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sliderInstance.next();
  };

  const openModal = (project) => {
    initiateModal();
    initiateSlider();
    setDetail(project);
    setImages(project);
  };

  const setImages = ({ image1, image2, image3, image4 }) => {
    const images = [image1, image2, image3, image4];
    const projectImages = document.querySelectorAll('.projectImage');
    for (let i = 0; i < images.length; i++) {
      projectImages[i].src = images[i];
      projectImages[i].alt = ('project-image' + [i + 1]).toString();
    }
  };

  if (loading) {
    return (
      <div class="preloader-wrapper small active" style={{ margin: '50%' }}>
        <div class="spinner-layer spinner-red-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!projects) {
    return (
      <div class="container" style={{ textAlign: 'center', paddingTop: '18%' }}>
        <div>
          <i class="material-icons">announcement</i>
        </div>
        <div>No Projects Available</div>
      </div>
    );
  }

  return (
    <div
      className="work-list-wrapper"
      style={{ padding: '1.5rem', margin: '0 2rem' }}
    >
      <div className="work-list row">
        {projects.map((project) => (
          <Work key={project.id} project={project} openModal={openModal} />
        ))}
      </div>

      <div id="modal1" class="modal pk-modal-frame">
        <div className="pk-modal-body">
          <div className="pk-modal-inner">
            <div className="pk-modal-slides">
              <div ref={sliderEl} className="slider" id="pk-slider">
                <div className="carousel-fixed-item center middle-indicator">
                  {detail && detail.url === '' && (
                    <div id="not-related-images" className="center">
                      * These images are not related to the content *
                    </div>
                  )}
                  <div className="left">
                    <a
                      href="previous"
                      onClick={movePrevSlide}
                      className="movePrevCarousel middle-indicator-text waves-effect waves-light content-indicator"
                    >
                      <i className="material-icons left  middle-indicator-text">
                        chevron_left
                      </i>
                    </a>
                  </div>
                  <div className="right">
                    <a
                      href="next"
                      onClick={moveNextSlide}
                      className=" moveNextCarousel middle-indicator-text waves-effect waves-light content-indicator"
                    >
                      <i className="material-icons right middle-indicator-text">
                        chevron_right
                      </i>
                    </a>
                  </div>
                </div>
                <ul className="slides">
                  <li>
                    <img class="projectImage" src="" alt="" />
                  </li>
                  <li>
                    <img class="projectImage" src="" alt="" />
                  </li>
                  <li>
                    <img class="projectImage" src="" alt="" />
                  </li>
                  <li>
                    <img class="projectImage" src="" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            {detail && (
              <div className="pk-modal-content container-fluid">
                <div className="work-title">{detail.title}</div>
                <div className="work-subtitle">{detail.subtitle}</div>
                <div className="divider"></div>
                <div className="work-explanation">{detail.description}</div>
              </div>
            )}
            <div className="pk-modal-footer link-quit container-fluid">
              {detail && (
                <div id="modal-visit-site">
                  {detail.url !== '' && (
                    <a href={detail.url} target="_blank" className="cta">
                      <span>Visit Site</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  )}
                  {detail.url === '' && (
                    <span id="no-link-reason">
                      Images are not allowed. <br />
                      This application is company's property
                    </span>
                  )}
                </div>
              )}
              <div id="modal-quit">
                <a className="modal-close waves-effect btn-flat">
                  <i className="material-icons center">close</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
