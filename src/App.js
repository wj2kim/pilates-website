import React, { useState, useRef, useEffect } from 'react';
import PageHeader from './pages/PageHeader';
import PageBody from './pages/PageBody';
import PageFooter from './pages/PageFooter';
import './App.scss';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const convasEl = useRef();

  const scrollEvent = () => {
    const scrollY = window.scrollY;
    console.log('here');
    if (convasEl.current) {
      const scroll = convasEl.current.scrollTop;
      console.log(`scrollEvent, ${scrollY} , ${scrollTop}`);
      setScrollTop(scroll);
      console.log(convasEl.current.clientHeight);
    }
  };

  // useEffect(() => {
  //   if (convasEl.current) {
  //     const convas = convasEl.current;
  //     if (convas.scrollTop === 200) {
  //       console.log('test1');
  //     }
  //   }
  // });

  return (
    <div className="App">
      <div id="canvas-wrapper">
        <div
          id="canvas"
          ref={convasEl}
          onScroll={scrollEvent}
          style={{ overflowY: 'auto' }}
        >
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
