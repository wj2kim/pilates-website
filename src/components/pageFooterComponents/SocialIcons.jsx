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
    <div id="social-icons" class="social-icons nav-wrapper">
      <ul>
        <a
          title="Instagram"
          target="_blank"
          href="https://www.instagram.com/pvvjk/"
        >
          <li class="social-name">INSTAGRAM</li>
        </a>
        <a title="Github" target="_blank" href="https://github.com/wj2kim">
          <li class="social-name">GITHUB</li>
        </a>
        <a
          title="Tistory"
          target="_blank"
          href="https://dont-stay-hungry.tistory.com"
        >
          <li class="social-name">TISTORY</li>
        </a>
      </ul>
    </div>
  );
};

export default SocialIcons;
