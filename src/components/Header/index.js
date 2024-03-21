import React, { useState, useEffect } from 'react';
import '../../assets/css/style.css';

import { ReactComponent as RaptorIcon } from '../../assets/icons/raptor.svg';

function Header() {
  const [isActive, setIsActive] = useState(false);


  const handleScroll = () => {

    const threshold = 200;

    setIsActive(window.scrollY > threshold);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="/Home" className="logo">
          <RaptorIcon className="logo" aria-hidden="true" />
          <span className='raptors'>RAPTORS</span>
        </a>
        <nav className="navbar">
          <button className="nav-close-btn" aria-label="close menu">
            {/* <CloseIcon aria-hidden="true" /> */}
          </button>
          <ul className="navbar-list">
            <li>
              <a href="#home" className={`navbar-link ${isActive ? 'active' : ''}`}>Home</a>
            </li>
            <li>
              <a href="#about" className={`navbar-link ${isActive ? 'active' : ''}`}>About Us</a>
            </li>
            <li>
              <a href="#Packages" className={`navbar-link ${isActive ? 'active' : ''}`}>Packages</a>
            </li>
            <li>
              <a href="/Login" className={`navbar-link ${isActive ? 'active' : ''}`}>Login</a>
            </li>
          </ul>
        </nav>
        <a href="/Register" className="btn btn-secondary">Try Now</a>
        <button className="nav-open-btn" aria-label="open menu">

          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
