import React from 'react';
import './MainBanner.scss';
import Navigation from '../../pages/Navigation';

const MainBanner = () => {
  return (
    <section className="main-banner">
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
            <div className="mynameis">Paul Woo Jung Kim </div>
          </div>
          <div className="intro-image col-6">
            <div className="banner-image-wrapper kenburns-bottom-right">
              <img
                className="banner-image"
                src="images/banner/banner-image.jpg"
                alt="banner-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="background-relation">
        <img
          className="dots"
          src="/images/banner/background-relation.svg"
          alt="background-relation"
        />
      </div> */}
    </section>

    // <div
    //   id="main-banner"
    //   class="main-banner d-flex align-items-center container"
    // >
    //   <div id="banner-wrapper">
    //     <div id="banner-row" class="row">
    //       <div class="col s6 align-self-center">
    //         <div id="self-introduction">
    //           Hello, I am a Front-End Developer in S.Korea.
    //           <br />
    //           Specialized in HTML/CSS/Javascipt and React.
    //           <br />
    //           Enjoy my Portfolio !
    //         </div>
    //         <div id="self-name">
    //           <p>Paul Woo Jung Kim</p>
    //         </div>
    //       </div>
    //       <div class="col s6 text-right text-xl-center">
    //         {/* <svg></svg> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainBanner;
