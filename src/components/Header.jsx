import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <div id="logo">
        <h1>Sporthästkliniken Häljeby AB</h1>
      </div>
      <div className="header-tab">
        <NavLink to="/kontakt" style={{ color: "black" }}>
          Kontakt
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/galleri" style={{ color: "black" }}>
          Galleri
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/partners" style={{ color: "black" }}>
          Partners
        </NavLink>
      </div>

      <div className="header-tab">
        <NavLink to="/tjänster" style={{ color: "black" }}>
          Tjänster
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/teamet" style={{ color: "black" }}>
          Teamet
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/nyheter" style={{ color: "black" }}>
          Nyheter
        </NavLink>
      </div>
    </div>
  );
}

export default Header
