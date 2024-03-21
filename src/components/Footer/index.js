import React from 'react';

import { ReactComponent as RaptorIcon } from '../../assets/icons/raptor.svg';
import footBackground from '../../assets/images/footer-bg.png';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


function Footer() {
  const footerStyle = {
    backgroundImage:  `url('${footBackground}')`
  };

  return (
    <footer className="footer">
      <div className="section footer-top bg-dark has-bg-image" style={footerStyle}>
        <div className="container">
          <div className="footer-brand">
            <a href="/Home" className="logo">
              <RaptorIcon className="logo" aria-hidden="true" />
              <span>RAPTORS</span>
            </a>
          </div>
          <ul className="footer-list">
  <li>
    <p className="footer-list-title has-before">Contact Us</p>
  </li>
  <li className="footer-list-item">
    <div className="icon">
    <FaLocationDot />
    </div>
    <address className="address footer-link">
      160 Kendal Ave, Toronto, ON M5R 1M3
    </address>
  </li>
  <li className="footer-list-item">
    <div className="icon">
    <FaPhone />
    </div>
    <div>
      <a href="tel:18001213637" className="footer-link">1800-123-4567</a>
      <a href="tel:+915552348765" className="footer-link">+1 555 666-8765</a>
    </div>
  </li>
  <li className="footer-list-item">
    <div className="icon">
    <IoMail />
    </div>
    <div>
      <a href="mailto:info@raptors.com" className="footer-link">info@raptors.com</a>
      <a href="mailto:services@raptors.com" className="footer-link">services@raptors.com</a>
    </div>
  </li>
</ul>

<ul className="footer-list">
  <li>
    <p className="footer-list-title has-before">Our Newsletter</p>
  </li>
  <li>
    <form action="" className="footer-form">
      <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required className="input-field" />
      <button type="submit" className="btn btn-primary" aria-label="Submit">
        <IoIosArrowForward />
      </button>
    </form>
  </li>
  <li>
    <ul className="social-list">
      <li>
        <a href="https://www.facebook.com/" className="social-link">
        <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" className="social-link">
        <IoLogoInstagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" className="social-link">
        <FaTwitter />
        </a>
      </li>
    </ul>
  </li>
</ul>

        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 Raptors Fitness. All Rights Reserved By <a href="/Home" className="copyright-link">Raptors Fitness.</a>
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="/Home" className="footer-bottom-link has-before">Privacy Policy</a>
            </li>
            <li>
              <a href="/Home" className="footer-bottom-link has-before">Terms & Condition</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

