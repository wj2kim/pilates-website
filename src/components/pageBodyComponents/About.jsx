import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="content-about" class="container-fluid">
      <div id="content-about-title">
        <a className="link-2">ABOUT</a>
      </div>
      {/* <div id="image-stack" class="image-stack">
        <div id="content-about-body" class="col s12">
          <div class="row about-me-wrapper">
            <div class="col s2">
              <img
                src="images/mypic.jpg"
                alt="paulwoojungkim_selfie"
                class="circle responsive-img z-depth-1"
              />
            </div>
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it
                appear circular.
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="header">
          <div class="logo"></div>
          <label class="night-mode" for="night" onclick="enableNight()">
            <i class="fa fa-moon-o"></i>
          </label>
        </div> */}
      <div id="image-stack" class="image-stack">
        <div class="row about-me">
          <div className="about-content col m6">
            <div className="profile-location">
              <i className="material-icons">room</i>
              Seoul, S. Korea
            </div>
            <div className="profile-name">Paul Woo Jung Kim</div>
            <div className="profile-title">Junior Front-End Developer</div>
            <div className="profile-summary">
              Love makaing interactive web, focusing on front-end technologies.
              I work best as I can. smart user interface and useful interaction.
              devloping rich skills on web application.
            </div>
          </div>
          <div className="about-content back-image col m6">
            <img
              src="images/profile-side-image4.svg"
              // style={{ height: '50vh', width: '50vw' }}
              alt="profile-side-image"
              class="profile-side-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
