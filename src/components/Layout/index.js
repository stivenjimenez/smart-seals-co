import React, { useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Navbar sidebar={sidebar} />
      {props.children}
    </>
  );
};

export default Layout;
