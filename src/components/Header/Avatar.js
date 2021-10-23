import React from "react";
import profileImage from "../../asset/profile@2x.png";

const Avatar = () => {
  return (
    <div className="header__avatar">
      <img
        src={profileImage}
        alt="imagen de perfil"
        className="header__avatar--image"
      />
    </div>
  );
};

export default Avatar;
