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
  }, [iconList]);

  return (
    <section id="content-about" class="container-fluid">
      <div id="content-about-title">
        <a className="link-2">ABOUT</a>
      </div>
      <div id="image-stack" class="image-stack">
        <div class="row about-me">
          <div className="about-content col s12 m6">
            <div className="profile-wrapper">
              <div className="profile-detail">
                <div className="profile-location">
                  <i className="material-icons">room</i>
                  Seoul, S. Korea
                </div>
                <div className="profile-name">Paul Woo Jung Kim</div>
                <div className="profile-title">JUNIOR FRONT-END DEVELOPER</div>
                <div className="profile-summary underline-effect-1">
                  Love makaing interactive web, focusing on front-end
                  technologies. I work best as I can. smart user interface and
                  useful interaction. devloping rich skills on web application.
                </div>
              </div>
            </div>
            <div className="icon-wrapper">
              <div ref={iconsEl} className="icons row">
                <div className="program-icon col s2" style={{ padding: 0 }}>
                  <a href="javascript:void(0)" className="icon" id="react-icon">
                    <svg
                      version="1.1"
                      id="Layer_2_1_"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 841.9 595.3"
                      enableBackground="new 0 0 841.9 595.3"
                      style={{ marginLeft: '10%' }}
                    >
                      <g>
                        <path
                          fill="#61DAFB"
                          d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
		c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
		c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6
		c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11
		c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6
		c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4
		c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6
		c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5
		c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2
		c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8
		c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9
		c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3
		c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z
		 M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z
		 M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z
		 M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z
		 M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z
		 M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
		c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7
		c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
		C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
		c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1
		c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
		C644,312.2,621.1,332.1,585.7,347.1z"
                        />
                        <polygon
                          fill="#61DAFB"
                          points="320.8,78.4 320.8,78.4 320.8,78.4 	"
                        />
                        <circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7" />
                        <polygon
                          fill="#61DAFB"
                          points="520.5,78.1 520.5,78.1 520.5,78.1 	"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="program-icon col s2">
                  <a
                    href="javascript:void(0)"
                    className="icon"
                    id="javascript-icon"
                  >
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
                  </a>
                </div>
                <div className="program-icon col s2">
                  <a
                    href="javascript:void(0)"
                    className="icon"
                    id="responsive-icon"
                  >
                    <img
                      src="images/about-icons/responsive.svg"
                      al="responsive.svg"
                      style={{ marginLeft: '12%' }}
                    />
                  </a>
                </div>
                <div className="program-icon col s2">
                  <a href="javascript:void(0)" className="icon" id="java-icon">
                    <img
                      src="images/about-icons/java-icon.svg"
                      al="java-icon.svg"
                      style={{ marginLeft: '8%' }}
                    />
                  </a>
                </div>
                <div className="program-icon col s2">
                  <a
                    href="javascript:void(0)"
                    className="icon"
                    id="spring-icon"
                  >
                    <img
                      src="images/about-icons/spring-icon.svg"
                      al="spring-icon.svg"
                    />
                  </a>
                </div>
                <div className="program-icon col s2"></div>
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
              src="images/profile-side-image6.svg"
              alt="profile-side-image"
              class="profile-side-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
