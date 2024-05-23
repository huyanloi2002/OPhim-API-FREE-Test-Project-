import React from "react";

const LoadingSpin = () => {
  return (
    <React.Fragment>
      <div className="h-full w-full text-light flex justify-center items-center bg-[transparent]">
        <div className="h-[40px] w-[40px] border-4 border-transparent rounded-full border-l-light animate-spin z-50"></div>
      </div>
    </React.Fragment>
  );
};

export default LoadingSpin;
