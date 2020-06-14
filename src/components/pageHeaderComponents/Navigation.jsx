import React from 'react';

const Navigation = () => {
  return (
    <div>
      <nav
        id="main-navigation"
        class="main-nav"
        style={{ borderBottom: '1px solid #cfcfcf' }}
      >
        <ul>
          <li class="page-collection active-link">
            <a href="/">Welcome</a>
          </li>
          <li class="page-collection">
            <a href="/balletfitPilatesInfo">Balletfit &amp; Pilates ?</a>
          </li>
          <li class="page-collection">
            <a href="/studio">Studio</a>
          </li>
          <li class="page-collection">
            <a href="/faq">faq</a>
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
