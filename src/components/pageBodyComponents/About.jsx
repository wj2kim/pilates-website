import React, { useState, useEffect, useRef } from 'react';
import './About.scss';

const About = () => {
  const [explanation, setExplanation] = useState('');
  const [iconList, setIconList] = useState(null);
  const iconsEl = useRef();
  const iconsExplain = {
    react: 'REACT - fun and exciting to work with',
    javascript: 'JS - caught upto ES6',
    responsive: 'UI/UX - getting better and better',
    java: 'JAVA - worked a lot with it',
    spring: 'SPRING - have a good experience on it ',
  };

  useEffect(() => {
    if (iconsEl.current) {
      let temp = [...iconsEl.current.children];
      temp.pop();
      setIconList(temp);
    }
  }, []);

  useEffect(() => {
    if (iconList) {
      iconList.forEach((icon, idx) => {
        icon.addEventListener('mouseenter', (e) => {
          switch (e.target.firstChild.getAttribute('id')) {
            case 'react-icon':
              setExplanation(iconsExplain.react);
              break;
            case 'javascript-icon':
              setExplanation(iconsExplain.javascript);
              break;
            case 'responsive-icon':
              setExplanation(iconsExplain.responsive);
              break;
            case 'java-icon':
              setExplanation(iconsExplain.java);
              break;
            case 'spring-icon':
              setExplanation(iconsExplain.spring);
              break;
            default:
              setExplanation('');
              break;
          }
        });
        icon.addEventListener('mouseleave', () => {
          setExplanation('');
        });
      });
    }
  }, [iconList, iconsExplain]);

  return (
    <section id="content-about" className="container-fluid">
      <div id="content-about-title">
        <div className="link-2">About Me</div>
      </div>
      <div id="image-stack" className="image-stack">
        <div className="row about-me">
          <div className="about-content header col s12 m6">
            <div className="profile-wrapper">
              <div className="profile-detail">
                <div className="profile-location">
                  <i className="material-icons">room</i>
                  Seoul, S. Korea
                </div>
                <div className="profile-name">Paul Woo Jung Kim</div>
                <div className="profile-title">JUNIOR FRONT-END DEVELOPER</div>
                <div className="profile-summary underline-effect-1">
                  I love handling{' '}
                  <span className="textEffect-1">interactive web</span>, making
                  smart user interface and useful interaction. Currently, I am{' '}
                  <span className="textEffect-1">focusing</span> on developing
                  rich skills on{' '}
                  <span className="textEffect-1">web application</span>.
                </div>
              </div>
            </div>
            <div className="icon-wrapper">
              <div ref={iconsEl} className="icons row">
                <div className="program-icon col s2 real">
                  <div className="icon" id="react-icon">
                    <img
                      src="images/about/icons/react-icon.svg"
                      alt="react-icon.svg"
                      style={{ padding: '3px' }}
                    />
                  </div>
                </div>
                <div className="program-icon col s2 real">
                  <div className="icon" id="javascript-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#F0DB4F"
                        d="M1.408 1.408h125.184v125.185h-125.184z"
                      />
                      <path
                        fill="#323330"
                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="program-icon col s2 real">
                  <div className="icon" id="responsive-icon">
                    <img
                      src="images/about/icons/responsive.svg"
                      alt="responsive.svg"
                      style={{ marginLeft: '12%' }}
                    />
                  </div>
                </div>
                <div className="program-icon col s2">
                  <div className="icon" id="java-icon">
                    <img
                      src="images/about/icons/java-icon.svg"
                      alt="java-icon.svg"
                      style={{ marginLeft: '8%' }}
                    />
                  </div>
                </div>
                <div className="program-icon col s2 real">
                  <div className="icon" id="spring-icon">
                    <img
                      src="images/about/icons/spring-icon.svg"
                      alt="spring-icon.svg"
                    />
                  </div>
                </div>
                <div className="program-icon col s2 non-real"></div>
              </div>
              <div className="icon-explain-wrapper">
                <div id="icon-explain" className="icon-explain">
                  <span id="icon-explain-span">{explanation}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content back-image col s12 m6">
            <img
              src="images/about/profile-side-image6.svg"
              alt="profile-side-pic"
              className="profile-side-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
