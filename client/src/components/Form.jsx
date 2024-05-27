import React from "react";

const Form = ({ children, onSubmit, className }) => {
  return (
    <React.Fragment>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </React.Fragment>
  );
};

export default Form;
