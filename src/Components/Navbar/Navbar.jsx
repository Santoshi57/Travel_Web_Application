import React from 'react';
import './Navbar.css';

import {BiLogoMediumOld} from 'react-icons/bi'
const Navbar = () => {
  return  <div className='navBar'>
        <div className="logoDiv">
       < BiLogoMediumOld className='icon'/>
      <span>OU-Trips</span>
        </div>
    <div className="menu">
<ul>
     <li className="navList">
        Destination
 </li>
 <li className="navList">
        About Us
 </li>
 <li className="navList">
       Testimonial
 </li>
 <li className="navList">
        Gallery
 </li>
      </ul>

      </div>
    </div>;
  
};

export default Navbar;