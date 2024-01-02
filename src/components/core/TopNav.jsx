import '../../App.css';
import React, { useState, useEffect } from 'react';
import Components from './NavBarComponents';

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    // window height changed for the demo
    windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
  };

  const handlePopstate = () => {
    setCurrentPath(window.location.pathname);
  };

  const handleItemClick = (path) => (event) => {
    event.preventDefault();
    setCurrentPath(path);
    // Add additional logic if needed, such as showing/hiding components based on path
  };

  const listItems = Components.map((item) => (
    <li key={item.name}>
      <a
        href={item.path}
        onClick={handleItemClick(item.path)}
        style={{
          textDecoration: 'none',
          fontWeight: currentPath === item.path ? 'bold' : 'normal',
        }}
      >
        {item.displayName}
      </a>
    </li>
  ));

  return (
    <div className={`navbar ${stickyClass}`}>
      <div>
        <nav>{listItems}</nav>
      </div>
      {Components.map((item) => (
        <div key={item.name} style={{ display: currentPath === item.path ? 'block' : 'none' }}>
          {/* Render the component conditionally based on the currentPath */}
          {currentPath === item.path && <item.component />}
        </div>
      ))}
    </div>
  );
}
