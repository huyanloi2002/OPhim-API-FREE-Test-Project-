import React from "react";
import Notification from "./Notification";
import Account from "./Account";

const NavAuth = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row gap-5 items-center justify-end">
        <Notification />
        <Account />
      </div>
    </React.Fragment>
  );
};

export default NavAuth;
