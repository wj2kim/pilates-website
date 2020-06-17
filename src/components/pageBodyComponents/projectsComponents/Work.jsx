import React from 'react';
import './Work.scss';
import M from 'materialize-css';

const modalOptions = {};

const sliderOptions = {
  indicators: false,
  interval: 6000,
};

const doneAnimating = false;

let sliderInstance = null;

document.addEventListener('DOMContentLoaded', function () {
  let modalElems = document.querySelector('.modal');
  let sliderElems = document.querySelector('.slider');
  M.Modal.init(modalElems, modalOptions);
  sliderInstance = M.Slider.init(sliderElems, sliderOptions);
});

const Work = () => {
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

  return (
    <div className="work col s6 m4" style={{ padding: 0, marginLeft: 0 }}>
      <div className="card card-image" style={{ margin: 0 }}>
        <div className="card-image">
          <img
            src="images/paulwoojungkimselfie1.jpg"
            style={{ objectFit: 'cover' }}
            alt=""
          />
          <p class="title">WORK TITLE</p>
          <div class="overlay"></div>
          <div class="button">
            <a class="modal-trigger" href="#modalOnWork">
              DETAIL
            </a>
          </div>
        </div>
      </div>
      <div id="modalOnWork" class="modal">
        <div class="modal-content">
          <div class="slider">
            <div class="carousel-fixed-item center middle-indicator">
              <div class="left">
                <a
                  href="previous"
                  onClick={movePrevSlide}
                  class="movePrevCarousel middle-indicator-text waves-effect waves-light content-indicator"
                >
                  <i class="material-icons left  middle-indicator-text">
                    chevron_left
                  </i>
                </a>
              </div>

              <div class="right">
                <a
                  href="next"
                  onClick={moveNextSlide}
                  class=" moveNextCarousel middle-indicator-text waves-effect waves-light content-indicator"
                >
                  <i class="material-icons right middle-indicator-text">
                    chevron_right
                  </i>
                </a>
              </div>
            </div>
            <ul class="slides">
              <li>
                <img src="https://lorempixel.com/580/250/nature/1" />
              </li>
              <li>
                <img src="https://lorempixel.com/580/250/nature/2" />
              </li>
              <li>
                <img src="https://lorempixel.com/580/250/nature/3" />
              </li>
              <li>
                <img src="https://lorempixel.com/580/250/nature/4" />
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <div class="container-fluid">
            <div class="work-title">Albarang</div>
            <div class="work-subtitle">Managing worker schedule</div>
            <div class="work-explanation">
              I just want some jazz today and you. I just want some jazz today
              and you. I just want some jazz today and you. I just want some
              jazz today and you. I just want some jazz today and you
            </div>
          </div>
          <div class="link-quit container-fluid">
            <div>
              <a class="waves-effect waves-light btn red accent-3" href="">
                Visit Site
                <i class="material-icons right">open_in_new</i>
              </a>
            </div>
            <div>
              <a class="modal-close waves-effect btn-flat">
                <i class="material-icons center">close</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
