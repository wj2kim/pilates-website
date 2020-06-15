import React from 'react';

const MainBanner = () => {
  return (
    <div id="banner-wrapper">
      <div id="banner-row" class="row">
        <div class="col-6 align-self-center">
          <div id="self-introduction">
            <p>
              Hello, I am a Front-End Developer
              <br />
              in S.Korea. Specialized in HTML/CSS/Javascipt and React. Enjoy my
              portfolio !
            </p>
          </div>
        </div>
        <div id="self-name">
          {/* <svg></svg> */}
          <p>Paul Woo Jung Kim</p>
        </div>
        <div class="col-6 text-right text-xl-center face">
          {/* <svg></svg> */}
        </div>
      </div>
      {/* <a href="/" rel="">
        <img
          id="banner"
          src=""
          alt="The Move On Balletpit &amp; Pilates Studio"
        />
        <p id="logo-tagline" class="logo-subtile">
          Classical Ballet &amp; Pilates Studio In Songdo, Incheon, Korea. EST.
          2019
        </p>
      </a> */}
    </div>
  );
};

export default MainBanner;
