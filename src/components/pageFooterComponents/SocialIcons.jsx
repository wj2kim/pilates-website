import React from 'react';
import './SocialIcons.scss';

// document.addEventListener('DOMContentLoaded', function () {
//   const socialNames = document.querySelectorAll('.social-name');
//   socialNames.forEach((name) => {
//     name.addEventListener('mouseover', (e) => {
//       e.target.
//     });
//   });
// });

const SocialIcons = () => {
  return (
    <div id="social-icons" className="social-icons nav-wrapper">
      <ul className="row">
        <a
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/pvvjk/"
        >
          <li className="social-name col s6 m4">INSTAGRAM</li>
        </a>
        <a
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/wj2kim"
        >
          <li className="social-name col s6 m4">GITHUB</li>
        </a>
        <a
          title="Tistory"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dont-stay-hungry.tistory.com"
        >
          <li className="social-name cols s6 m4">TISTORY</li>
        </a>
      </ul>
    </div>
  );
};

export default SocialIcons;
