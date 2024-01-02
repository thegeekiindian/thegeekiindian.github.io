import '../../App.css';
import React, { useState, useEffect } from 'react';
import Components from './NavBarComponents';
import Route from '../elements/Route';

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  // Creating a liost items for all the navbar components
  const listItems = Components.map((item) => (
    <li>
      <a href={item.path} style={{ textDecoration: 'none' }}>
        {item.displayName}
      </a>
    </li>
  ));

  return (
    <div className={`navbar ${stickyClass}`}>
      <div>
        <nav>{listItems}</nav>
      </div>
      {
        /* Dynamically creating routes for all the components from '../elements/Route' */
        Components.map((item) => <Route path={item.path} component={item.component}></Route>)
      }
    </div>
  );
}
