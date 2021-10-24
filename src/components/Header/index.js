import React from "react";
import Search from "./Search";
import Notifications from "./Notifications";
import Avatar from "./Avatar";

import "./styles.css";
const Header = (props) => {
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="https://smartseals.co/img/logo-smart.png"
          alt="logo smart seals co"
          className="header__logo"
          onClick={() => props.setSidebar(!props.sidebar)}
        />
        <Search />
      </div>
      <div className="header__right">
        <Notifications />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
