import React, { useState, useEffect, useRef } from 'react';
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
  const [modalInstance, setModalInstance] = useState(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const modalEl = useRef();
  const sliderEl = useRef();
  // let sliderInstance = null;

  useEffect(() => {
    setLoading(true);
    // let sliderElems = document.querySelector('#pk-slider');
    // console.log(sliderElems);
    // sliderInstance = M.Slider.init(sliderElems, sliderOptions);
    // console.log('is here');
    setProjects(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (modalEl.current) {
      preventMomentumScroll(modalEl.current);
    }
  }, [modalEl.current]);

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
  const initiateModal = () => {
    const modalOptions = {};
    console.log(document.querySelector('.modal'));
    const test1 = document.querySelector('.modal');
    const testInstance = M.Modal.init(test1, { dismissible: false });
    console.log(testInstance);
    testInstance.open();
    // console.log(
    //   M.Modal.init(document.querySelectorAll('.modal'), modalOptions),
    // );
    // let modalIns = M.Modal.init(modalEl.current, modalOptions);
    // console.log(modalIns);
    // console.log(modalEl.modal('open'));
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
    console.log(modalEl);
    // modalEl.current.classList.toggle('active');
    // modalEl.current.classList.remove('leave');
    setShowModal(true);
    initiateModal();
    initiateSlider();
    // modalInstance.open();
    setDetail(project);
  };

  const closeModal = (e) => {
    // modalEl.current.classList.remove('active');
    // modalEl.current.classList.add('leave');
    modalInstance.close();
    setShowModal(false);
    setModalInstance(null);
    setSliderInstance(null);
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

      <div ref={modalEl} id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>

      {/* <div
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
                <div className="divider"></div>
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
      </div> */}
    </div>
  );
};

export default WorkList;
