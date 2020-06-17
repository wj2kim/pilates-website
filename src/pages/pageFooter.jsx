import React from 'react';
import SocialIcons from '../components/pageFooterComponents/SocialIcons';

const PageFooter = () => {
  return (
    <div id="page-footer" className="container-fluid">
      <div className="divider"></div>
      <div className="row">
        <div id="social-icons-wrapper" className="col s12 m6 push-m6">
          <SocialIcons />
        </div>
        <div id="copyright-wrapper" className="col s12 m6 pull-m6">
          <div id="copyright">
            <i className="material-icons">copyright</i>
            Paul Woo Jung Kim 2020. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
