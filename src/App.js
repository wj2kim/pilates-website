import React from 'react';
import PageHeader from './pages/HeaderPage';
import PageBody from './pages/BodyPage';
import PageFooter from './pages/FooterPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div id="canvas-wrapper">
        <div id="canvas">
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
