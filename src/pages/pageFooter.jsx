import React from 'react';
import SocialIcons from '../components/pageFooterComponents/SocialIcons';
import SocialPhotos from '..//compornets/pageFooterComponents/SocialPhotos';

const PageFooter = () => {
  const contentDelimeter = <hr />;
  return (
    <div id="page-footer">
      <div class="content-delimeter">{contentDelimeter}</div>
      <div id="social-icons-wrapper">
        <SocialIcons />
      </div>
      <div class="content-delimeter">{contentDelimeter}</div>
      <div id="social-photos-wrapper">
        <SocialPhotos />
      </div>
    </div>
  );
};

export default PageFooter;
