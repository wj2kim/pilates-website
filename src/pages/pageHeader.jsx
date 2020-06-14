import React from 'react';
import MainBanner from './components/MainBanner';
import Navigation from './components/Navigation';

const PageHeader = () => {
  return (
    <div id="page-header">
      <div id="main-banner-wrapper">
        <MainBanner />
      </div>
      <div id="navigation-wrapper">
        <Navigation />
      </div>
    </div>
  );
};

export default PageHeader;
