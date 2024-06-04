import React from "react";
import AccountInformation from "../components/AccountInformation";
import LoginHistory from "../components/LoginHistory";
import SecurityLevel from "../components/SecurityLevel";
import Support from "../components/Support";
import { useSelector } from "react-redux";
import LoadingAccountInfomation from "../components/Loading/LoadingAccountInfomation";

const PersonalInformation = () => {
  const { isLoading } = useSelector((state) => state.auth.getUser);

  return (
    <React.Fragment>
      <div className="w-full h-full grid grid-cols-4  grid-rows-4 gap-2 text-secondary">
        <div className="col-span-2 row-span-2 bg-light rounded-2xl">
          {isLoading ? <LoadingAccountInfomation /> : <AccountInformation />}
        </div>
        <div className="col-span-2 row-span-2 bg-light rounded-2xl">
          {isLoading ? <LoadingAccountInfomation /> : <LoginHistory />}
        </div>
        <div className="col-span-3 row-span-2 bg-light rounded-2xl">
          {isLoading ? <LoadingAccountInfomation /> : <SecurityLevel />}
        </div>
        <div className="col-span-1 row-span-2 bg-light rounded-2xl">
          {isLoading ? <LoadingAccountInfomation /> : <Support />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalInformation;
