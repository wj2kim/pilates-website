import React from 'react';
import M from 'materialize-css';

const Navigation = () => {
  const navOptions = {
    edge: 'right',
  };

  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, navOptions);
  });

  return (
    <div id="navigation">
      <div id="sticky-top-menu" class="navbar-fixed">
        <nav class="transparent z-depth-0">
          <div class="nav-wrapper">
            <a href="/" class="brand-logo left black-text">
              Logo
            </a>
            <a
              href="#"
              data-target="mobile-responsive"
              class="sidenav-trigger right black-text"
            >
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a class="black-text waves-effect waves-teal" href="/Home">
                  Home
                </a>
              </li>
              <li>
                <a class="black-text waves-effect waves-teal" href="/about">
                  About
                </a>
              </li>
              <li>
                <a class="black-text waves-effect waves-teal" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="black-text waves-effect waves-teal" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a class="black-text waves-effect waves-teal" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-responsive">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
