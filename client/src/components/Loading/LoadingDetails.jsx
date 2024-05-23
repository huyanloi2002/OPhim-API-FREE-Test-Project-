import React from "react";

const LoadingDetails = () => {
  return (
    <React.Fragment>
      <div className="w-full h-[520px] grid grid-cols-6 gap-5">
        <div className="col-span-2 h-full animate-pulse rounded-md bg-slate-800"></div>
        <div className="col-span-4 h-full animate-pulse rounded-md bg-slate-800"></div>
      </div>
    </React.Fragment>
  );
};

export default LoadingDetails;
