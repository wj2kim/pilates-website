import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="content-about" class="container-fluid">
      <div id="content-about-title">
        <h4>About</h4>
      </div>
      <div class="image-stack">
        <div id="content-about-body" class="col s12 m8 offset-m2 l6 offset-l3">
          <div class="card-panel white lighten-5 z-depth-1">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img
                  src="images/mypic.jpg"
                  alt="paulwoojungkim_selfie"
                  class="circle responsive-img"
                />
              </div>
              <div class="col s10">
                <span class="black-text">
                  This is a square image. Add the "circle" class to it to make
                  it appear circular.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
