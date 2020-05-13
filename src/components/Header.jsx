import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <div id="logo">
        <h1>Sporthästkliniken Häljeby AB</h1>
      </div>
      <div className="header-tab">
        <NavLink to="/kontakt" style={{ color: "white" }}>
          Kontakt
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/galleri" style={{ color: "white" }}>
          Galleri
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/partners" style={{ color: "white" }}>
          Partners
        </NavLink>
      </div>

      <div className="header-tab">
        <NavLink to="/tjänster" style={{ color: "white" }}>
          Tjänster
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/teamet" style={{ color: "white" }}>
          Teamet
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/nyheter" style={{ color: "white" }}>
          Nyheter
        </NavLink>
      </div>
    </div>
  );
}

export default Header
