import React from 'react';
import SocialIcons from '../components/pageFooterComponents/SocialIcons';

const PageFooter = () => {
  return (
    <div id="page-footer" style={{ borderTop: '1px solid #cfcfcf' }}>
      <div id="footer-row" class="row">
        <div id="footer-textarea">
          <p>Footer Explaination</p>
        </div>
        <div id="social-icons-wrapper">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
