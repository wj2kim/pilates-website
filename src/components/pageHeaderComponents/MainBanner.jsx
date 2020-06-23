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
              Hello, I am weird but <span className="textEffect">cheerful</span>{' '}
              guy in S.Korea. I look upto professional Front-End Developer and{' '}
              <span className="textEffect">I am on it's way</span>. Enjoy my{' '}
              <span className="textEffect">portfolio.</span>
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
