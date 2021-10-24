import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import "./index.css";

const Navbar = (props) => {
  let url = window.location.pathname;
  return (
    <>
      <nav className={"nav__menu"}>
        <ul className="nav__menu--items">
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={`${item.cName} ${
                  url === item.path ? "active-item" : null
                }`}
              >
                <Link to={item.path} className="nav__menu--link">
                  {item.icon}
                  <span
                    className={
                      props.sidebar
                        ? "nav__menu--text"
                        : "nav__menu--textInactive"
                    }
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
