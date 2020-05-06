import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <div id="logo">
        <h1>Sporthästkliniken Häljeby AB</h1>
      </div>
      <div id="menu">Här kommer massa knappar, vänta du bara</div>
      <NavLink to="/teamet">Teamet</NavLink>
      <NavLink to='/tjänster'>Tjänster</NavLink>
    </div>
  );
}

export default Header
