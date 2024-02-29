import React from 'react';
import pp from '../assets/pp.jpg'
function Navbar({ companyName }) {
  return (
    <div className="navbar">
      <div className="company-name">{companyName}</div>
      <div className="profile-settings">
        <img src={pp} alt="Profile" className="profile-pic" />
        <i className="fa fa-cog settings-icon"></i>
      </div>
    </div>
  );
}

export default Navbar;
