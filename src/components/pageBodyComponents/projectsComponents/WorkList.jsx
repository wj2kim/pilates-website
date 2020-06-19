import React, { useState, useEffect, useRef, useCallback } from 'react';
import Work from './Work';
import M from 'materialize-css';
import './Modal.scss';
import data from '../../../data/projects.json';

const WorkList = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEventSet, setIsEventSet] = useState(false);
  const [sliderInstance, setSliderInstance] = useState(null);
  const modalEl = useRef();
  const sliderEl = useRef();

  const sliderOptions = {
    indicators: false,
    interval: 6000,
  };

  useEffect(() => {
    setLoading(true);
    // console.log(modalEl);
    // console.log(sliderEl);
    setProjects(data);
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   if (modalEl.current) {
  //     preventMomentumScroll(modalEl.current);
  //   }
  //   if (sliderEl.curret) {
  //     setSliderInstance(M.Slider.getInstance(sliderEl.current, sliderOptions));
  //   }
  // });

  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelector('.slider');
    setSliderInstance(M.Slider.init(elems, sliderOptions));
  });

  useEffect(() => {
    const target = modalEl.current;
    const events = ['scroll', 'touchmove', 'mousewheel'];
    const eventFunction = (e) => {
      if (!e) {
        e = window.event;
      }
      if (e.preventDefault) {
        e.preventDefault();
      }
    };
    if (showModal && !isEventSet) {
      const addMultipleEventListener = (target, events, eventFunction) => {
        events.forEach((event) =>
          target.addEventListener(event, eventFunction),
        );
      };
      addMultipleEventListener(target, events, eventFunction);
      setIsEventSet(true);
    }
    if (!showModal && isEventSet) {
      const removeMultipleEventListener = (target, events, eventFunction) => {
        events.forEach((event) =>
          target.removeEventListener(event, eventFunction),
        );
      };
      removeMultipleEventListener(target, events, eventFunction);
      setIsEventSet(false);
    }
  }, [showModal]);

  function preventMomentumScroll(el) {
    const { scrollTop, offsetHeight, scrollHeight } = el;
    if (scrollTop === 0) {
      el.scrollTo(0, 1);
      return true;
    }
    if (scrollTop + offsetHeight >= scrollHeight) {
      el.scrollTo(0, scrollHeight - offsetHeight - 1);
      return true;
    }
    return false;
  }

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
    modalEl.current.classList.toggle('active');
    modalEl.current.classList.remove('leave');
    setShowModal(true);
    setDetail(project);
  };

  const closeModal = (e) => {
    modalEl.current.classList.remove('active');
    modalEl.current.classList.add('leave');
    setShowModal(false);
    setDetail(null);
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
      style={{ padding: '1.5rem', margin: '0 4rem' }}
    >
      <div className="work-list row">
        {projects.map((project) => (
          <Work key={project.id} project={project} openModal={openModal} />
        ))}
      </div>

      <div
        ref={modalEl}
        onScroll={(e) => preventMomentumScroll(e.currentTarget)}
        onTouchMove={(e) => {
          if (!preventMomentumScroll(e.currentTarget)) {
            e.stopPropagation();
          }
        }}
        className="pk-modal-frame"
      >
        <div className="pk-modal-body">
          <div className="pk-modal-inner">
            <div className="pk-modal-slides">
              <div ref={sliderEl} className="slider" id="pk-slider">
                <div className="carousel-fixed-item center middle-indicator">
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
                {detail && (
                  <ul className="slides">
                    <li>
                      <img src={detail.image1} />
                    </li>
                    <li>
                      <img src={detail.image2} />
                    </li>
                    <li>
                      <img src={detail.image3} />
                    </li>
                    <li>
                      <img src={detail.image4} />
                    </li>
                  </ul>
                )}
              </div>
            </div>
            {detail && (
              <div className="pk-modal-content container-fluid">
                <div className="work-title">{detail.title}</div>
                <div className="work-subtitle">{detail.subtitle}</div>
                <div className="work-explanation">{detail.description}</div>
              </div>
            )}
            <div className="pk-modal-footer link-quit container-fluid">
              {detail && (
                <div>
                  <a
                    className="waves-effect waves-light btn red accent-3"
                    href={detail.url}
                  >
                    Visit Site
                    <i className="material-icons right">open_in_new</i>
                  </a>
                </div>
              )}
              <div>
                <a className="modal-close waves-effect btn-flat">
                  <i className="material-icons center">close</i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pk-modal-overlay" onClick={closeModal}></div>
      </div>
    </div>
  );
};

export default WorkList;
