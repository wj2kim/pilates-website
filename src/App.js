import React from 'react';
import pageHeader from './pages/pageHeader';
import pageBody from './pages/pageBody';
import pageFooter from './pages/pageFooter';

function App() {
  return (
    <div className="App">
      <nav id="mobile-navigation"></nav>
      <div id="canvas-wrapper">
        <div id="canvas">
          <div id="page-header-wrapper">
            <pageHeader></pageHeader>
          </div>
          <div id="page-body-wrapper">
            <pageBody></pageBody>
          </div>
          <div id="page-footer-wrapper">
            <pageFooter></pageFooter>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
