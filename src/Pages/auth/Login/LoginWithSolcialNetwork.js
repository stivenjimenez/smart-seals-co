import React from "react";

import * as FcIcons from "react-icons/fc";
import * as CgIcons from "react-icons/cg";
import * as SiIcons from "react-icons/si";

const LoginWithSolcialNetwork = () => {
  return (
    <>
      <div className="login__socialNetworks--wrapper">
        <div className="login__socialNetworks--button">
          <FcIcons.FcGoogle size={25} />
        </div>
        <div className="login__socialNetworks--button">
          <SiIcons.SiApple size={25} color="#31314f" />
        </div>
        <div className="login__socialNetworks--button">
          <CgIcons.CgFacebook size={25} color="#3b5999" />
        </div>
      </div>
    </>
  );
};
export default LoginWithSolcialNetwork;
