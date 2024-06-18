import React from "react";

const Sidebar = ({ children, row = ["row-span-12"] }) => {
  const arrayChildren = Array.isArray(children)
    ? children
    : new Array(children);

  return (
    <React.Fragment>
      <div className="h-full w-full grid grid-rows-12 gap-5">
        {row.map((item, index) => (
          <div
            className={`${item} rounded-3xl bg-opacity-white-0.2`}
            key={index}
          >
            {arrayChildren[index]}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
