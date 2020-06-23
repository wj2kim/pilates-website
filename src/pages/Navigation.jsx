import React from 'react';
import './Navigation.scss';
import M from 'materialize-css';

const Navigation = () => {
  const navOptions = {
    edge: 'right',
  };

  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelector('.sidenav');
    const sideNavInstance = M.Sidenav.init(elems, navOptions);
    const menus = elems.childNodes;
    menus.forEach((menu) => {
      menu.addEventListener('click', () => {
        sideNavInstance.close();
      });
    });
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
                <a className="black-text" href="#content-about">
                  About
                </a>
              </li>
              <li>
                <a className="black-text" href="#content-portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a className="black-text" href="#content-blog">
                  Blogs
                </a>
              </li>
              <li>
                <a className="black-text" href="#content-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-responsive">
        <li>
          <a className="sidenav-menu" href="#main-banner">
            Home
          </a>
        </li>
        <li>
          <a className="sidenav-menu" href="#content-about">
            About
          </a>
        </li>
        <li>
          <a className="sidenav-menu" href="#content-portfolio">
            Projects
          </a>
        </li>
        <li>
          <a className="sidenav-menu" href="#content-blog">
            Blog
          </a>
        </li>
        <li>
          <a className="sidenav-menu" href="#content-contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
