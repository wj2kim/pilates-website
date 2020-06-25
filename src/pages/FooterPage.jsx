import React from 'react';
import SocialIcons from '../components/pageFooterComponents/SocialIcons';
import './FooterPage.scss';

const PageFooter = () => {
  return (
    <div id="page-footer" className="container-fluid">
      <div className="divider"></div>
      <div className="footer row">
        <div id="social-icons-wrapper" className="col s12 m12 l6 push-l6">
          <SocialIcons />
        </div>
        <div id="copyright-wrapper" className="col s12 m12 l6 pull-l6">
          <div id="copyright">
            <i className="material-icons">copyright</i>
            Paul Woo Jung Kim 2020 - All rights reserved.
          </div>
        </div>
      </div>
      <div className="footer-image-wrapper">
        <img
          className="footer-image"
          src="images/footer/footer-background.png"
          alt="footer-pic"
        />
      </div>
    </div>
  );
};

export default PageFooter;
