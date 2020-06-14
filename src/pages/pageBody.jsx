import React from 'react';
import ContentIntroHeader from '../components/pageBodyComponents/ContentIntroHeader';
import ContentIntroBody from '../components/pageBodyComponents/ContentIntroBody';
import CarouselThumbnailsGallary from '../components/pageBodyComponents/CarouselThumbnailsGallary';
import ContentBodyHeader from '../components/pageBodyComponents/ContentMainHeader';
import ContentMainFirst from '../components/pageBodyComponents/ContentMainFirst';
import ContentMainSecond from '../components/pageBodyComponents/ContentMainSecond';
import ContentMainThird from '../components/pageBodyComponents/ContentMainThird';

const PageBody = () => {
  const contentDelimeter = <hr />;

  return (
    <div id="page-body">
      <div id="content-wrapper">
        <div id="content">
          <div id="content-intro-header-wrapper">
            <ContentIntroHeader />
          </div>
          <div class="content-delimeter">{contentDelimeter}</div>
          <div id="content-intro-body-wrapper">
            <ContentIntroBody />
          </div>
          <div id="content-intro-footer-wrapper">
            <CarouselThumbnailsGallary />
          </div>
          <div id="content-main-header-wrapper">
            <ContentBodyHeader />
          </div>
          <div class="content-delimeter">{contentDelimeter}</div>
          <div id="content-main-first-wrapper">
            <ContentMainFirst />
          </div>
          <div class="content-delimeter">{contentDelimeter}</div>
          <div id="content-main-second-wrapper">
            <ContentMainSecond />
          </div>
          <div class="content-delimeter">{contentDelimeter}</div>
          <div id="content-main-third-wrapper">
            <ContentMainThird />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBody;
