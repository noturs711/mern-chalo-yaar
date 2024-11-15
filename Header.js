// import React from 'react';

// const Header = ({ onLoginClick }) => {
//   return (
//     <header>
//       <p className='logo'>चलो यार</p>
//       <div className="bx bx-menu" id="menu-icon"></div>
//       <ul className="navbar">
//   <li><a href="#home">Home</a></li>
//   <li><a href="#package">Package</a></li>
//   <li><a href="#service">Service</a></li>
//   <li><a href="#contact">Contact Us</a></li>
//   <li><button className="custom-login-button" onClick={onLoginClick}>Login</button></li>

// </ul>

//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLoginClick }) => {
  return (
    <header>
      <p className='logo'>चलो यार</p>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Package</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><button className="custom-login-button" onClick={onLoginClick}>Login</button></li>
      </ul>
    </header>
  );
};

export default Header;
