import React, { useState } from "react";
import notificationsIcon from "../../asset/notifications.svg";

const Notifications = () => {
  const [accountant, setAccountant] = useState(0);
  return (
    <div
      onClick={() => setAccountant(accountant + 1)}
      className="notifications__wrapper"
    >
      <img src={notificationsIcon} alt="notificaciones" />
      <div className="notifications__ccountant">
        <span>{accountant}</span>
      </div>
    </div>
  );
};

export default Notifications;
