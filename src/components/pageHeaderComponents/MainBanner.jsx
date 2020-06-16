import React from 'react';
import './MainBanner.scss';

const MainBanner = () => {
  return (
    <div class="container-fluid main-banner">
      <div class="row">
        <div class="col-6 align-self-center">
          <div class="whoami">
            <p>
              Hello, I am a Front-End Developer in S.Korea. Specialized in
              HTML/CSS/Javascipt and React. Enjoy my Portfolio !
            </p>
          </div>
          <div class="name">Paul Woo Jung Kim</div>
        </div>
        <div class="col-6 text-right text-xl-center"></div>
      </div>
    </div>

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
