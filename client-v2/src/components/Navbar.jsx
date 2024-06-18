import React from "react";
import Search from "./Search";
import NavMenu from "./NavMenu";
import NavAuth from "./NavAuth";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="grid grid-cols-6 gap-5 items-center w-full h-[100px]">
        <div className="col-span-1">
          <Search />
        </div>
        <div className="col-span-3">
          <NavMenu />
        </div>
        <div className="col-span-2">
          <NavAuth />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
