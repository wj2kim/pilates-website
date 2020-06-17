import React from 'react';
import SocialIcons from '../components/pageFooterComponents/SocialIcons';

const PageFooter = () => {
  return (
    <div
      id="page-footer"
      class="container-fluid"
      style={{ borderTop: '1px solid #cfcfcf' }}
    >
      <div id="copyright-wrapper">
        <div id="copyright">
          <i class="material-icons">copyright</i>
          Paul Woo Jung Kim 2020. All rights reserved.
        </div>
      </div>
      <div id="social-icons-wrapper">
        <SocialIcons />
      </div>
    </div>
  );
};

export default PageFooter;
