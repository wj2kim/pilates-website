import React from 'react';
import Navigation from './pages/Navigation';
import PageHeader from './pages/PageHeader';
import PageBody from './pages/PageBody';
import PageFooter from './pages/PageFooter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div id="canvas-wrapper">
        <div id="canvas">
          <div id="navigation-wrapper">
            <Navigation />
          </div>
          <div id="page-header-wrapper">
            <PageHeader />
          </div>
          <div id="page-body-wrapper">
            <PageBody />
          </div>
          <div id="page-footer-wrapper">
            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
