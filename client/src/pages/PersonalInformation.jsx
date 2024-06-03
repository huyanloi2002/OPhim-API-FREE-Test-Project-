import React from "react";
import AccountInformation from "../components/AccountInformation";
import LoginHistory from "../components/LoginHistory";
import SecurityLevel from "../components/SecurityLevel";
import Support from "../components/Support";
import { useSelector } from "react-redux";

const PersonalInformation = () => {
  const { isLoading } = useSelector((state) => state.auth.getUser);

  return (
    <React.Fragment>
      <div className="w-full h-full grid grid-cols-4  grid-rows-4 gap-2 text-secondary">
        <div className="col-span-2 row-span-2 bg-light rounded-2xl">
          {isLoading ? (
            <div className="h-[50px] w-[50px] border-2 border-transparent border-t-2 border-l-2 border-t-secondary border-l-secondary rounded-full animate-spin"></div>
          ) : (
            <AccountInformation />
          )}
        </div>
        <div className="col-span-2 row-span-2 bg-light rounded-2xl py-2 px-3 flex flex-col">
          {isLoading ? (
            <div className="h-[50px] w-[50px] border-2 border-transparent border-t-2 border-l-2 border-t-secondary border-l-secondary rounded-full animate-spin"></div>
          ) : (
            <LoginHistory />
          )}
        </div>
        <div className="col-span-3 row-span-2 bg-light rounded-2xl py-2 px-3 flex flex-col">
          {isLoading ? (
            <div className="h-[50px] w-[50px] border-2 border-transparent border-t-2 border-l-2 border-t-secondary border-l-secondary rounded-full animate-spin"></div>
          ) : (
            <SecurityLevel />
          )}
        </div>
        <div className="col-span-1 row-span-2 bg-light rounded-2xl py-2 px-3 flex flex-col">
          {isLoading ? (
            <div className="h-[50px] w-[50px] border-2 border-transparent border-t-2 border-l-2 border-t-secondary border-l-secondary rounded-full animate-spin"></div>
          ) : (
            <Support />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalInformation;
