import React from 'react';

const Navigation = () => {
  return (
    <div id="sticky-top-menu">
      <a href="/">
        <svg></svg>
      </a>
      <nav id="main-navigation" class="main-nav">
        <ul>
          <li class="page-collection active-link">
            <a href="/">Home</a>
          </li>
          <li class="page-collection">
            <a href="/about">About</a>
          </li>
          <li class="page-collection">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li class="page-collection">
            <a href="/blog">Blog</a>
          </li>
          <li class="page-collection">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
