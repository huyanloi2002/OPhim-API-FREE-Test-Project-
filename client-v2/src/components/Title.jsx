import React from "react";

const Title = ({ icon, text, className = "" }) => {
  return (
    <React.Fragment>
      <span className={`inline-flex items-center gap-1  ${className}`}>
        <p>{icon}</p>
        <p>{text}</p>
      </span>
    </React.Fragment>
  );
};

export default Title;
