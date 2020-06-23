import React from 'react';
import './MainBanner.scss';
import Navigation from '../../pages/Navigation';

const MainBanner = () => {
  return (
    <section id="main-banner" className="main-banner">
      <div id="navigation-wrapper">
        <Navigation />
      </div>
      <div className="container-fluid">
        <div className="row main-banner-row">
          <div className="introduction col-6">
            <div className="whoami">
              Hello, I am a Front-End Developer in S.Korea. Specialized in
              HTML/CSS/Javascipt and React. Enjoy my Portfolio !
            </div>
            <div className="mynameis">
              Paul Woo <br /> Jung Kim
            </div>
          </div>
          <div className="intro-image col-6">
            <div className="banner-image-wrapper kenburns-bottom-right">
              <img
                className="banner-image"
                src="images/banner/banner-background.png"
                alt="banner-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
