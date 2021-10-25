import React, { useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";

import "./index.css";

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className="hero">
        <Navbar sidebar={sidebar} />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
