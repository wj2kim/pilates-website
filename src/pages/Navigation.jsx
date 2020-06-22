import React from 'react';
import './Navigation.scss';
import M from 'materialize-css';

const Navigation = () => {
  const navOptions = {
    edge: 'right',
  };

  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, navOptions);
  });

  return (
    <div id="navigation">
      <div id="sticky-top-menu" className="navbar-fixed ">
        <nav className="white z-depth-0">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left black-text">
              <img
                id="web-logo"
                src="images/navigation-icons/initialLetter-logo.svg"
              ></img>
            </a>
            <a
              href="#"
              data-target="mobile-responsive"
              className="sidenav-trigger right black-text"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="black-text waves-effect waves-brown"
                  href="#content-about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="black-text waves-effect waves-brown"
                  href="#content-portfolio"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="black-text waves-effect waves-brown"
                  href="#content-blog"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  className="black-text waves-effect waves-brown"
                  href="#content-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-responsive">
        <li>
          <a href="#content-about">About</a>
        </li>
        <li>
          <a href="#content-portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#content-blog">Blog</a>
        </li>
        <li>
          <a href="#content-contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
