import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useDocumentScrollThrottled from "../modules/scrollHandler";

const Header = () => {

    const [shouldFillHeader, setShouldFillHeader] = useState(false)
    const [shouldNotFillHeader, setShouldNotFillHeader] = useState(true)

    const MINIMUM_SCROLL = 50;
    const TIMEOUT_DELAY = 20

    useDocumentScrollThrottled(callbackData => {
      const { currentScrollTop } = callbackData;
      const isScrolledDown = currentScrollTop !== 0;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

      setShouldNotFillHeader(currentScrollTop < 20);

      setTimeout(() => {
        setShouldFillHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY)
    })

    const transparentStyle = shouldNotFillHeader ? "transparent" : "filled";
    const scrollStyle = shouldFillHeader ? "fill" : "transparent";

  return (

    <header className={`header ${scrollStyle} ${transparentStyle}`}>
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
    </header>
  );
};

export default Header;
