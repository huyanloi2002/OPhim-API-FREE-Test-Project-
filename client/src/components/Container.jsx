import React from "react";

const Container = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container px-2 py-1">{children}</div>
    </React.Fragment>
  );
};

export default Container;
