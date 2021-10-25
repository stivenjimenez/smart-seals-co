import React, { useContext } from "react";
import profileImage from "../../asset/profile@2x.png";
import { AuthenticationContext } from "../../context/AuthenticationContext";

const Avatar = () => {
  const { setIsLogin } = useContext(AuthenticationContext);
  return (
    <div className="header__avatar">
      <img
        src={profileImage}
        alt="imagen de perfil"
        className="header__avatar--image"
        onClick={() => {
          localStorage.clear();
          setIsLogin(false);
        }}
      />
    </div>
  );
};

export default Avatar;
