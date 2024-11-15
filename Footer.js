import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#BOOK">Book</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#packages">Packages</a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} chalo yaar. All rights reserved.</p>
          <p>Follow us on: 
          <FaFacebook   /> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <FaInstagram /><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
          <div className='lol'>
          <p> Contact us on:</p>
          <CgMail /><a style={{fontSize:'1rem'}}      href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer"> Mail</a>
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
