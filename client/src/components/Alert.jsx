import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlertAction } from "../store/alert/alertSlice";

const Alert = () => {
  const dispatch = useDispatch();
  const { total_alert } = useSelector((state) => state.alert);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setIsShow(false);
      dispatch(deleteAlertAction());
    }, [4000]);

    return () => clearTimeout(timer);
  }, [total_alert, dispatch]);

  const handleCloseAlert = () => {
    setIsShow(false);
    dispatch(deleteAlertAction());
  };

  return (
    <React.Fragment>
      {total_alert &&
        total_alert.length > 0 &&
        total_alert.map((alert, index) => (
          <div
            key={index}
            className={`absolute animate-[alert_0.5s_ease-in-out] ${
              isShow ? "opacity-100" : "opacity-0"
            }
            opacity-1 left-[10px] bottom-[-15px] z-50 bg-light rounded-lg cursor-default shadow-xl h-[60px] w-[300px]`}
          >
            <span
              className={`inline-flex items-center justify-between gap-3 h-full w-full py-1 px-5`}
              style={{ color: `${alert.color}` }}
            >
              <span className="inline-flex items-center justify-start gap-2">
                <i
                  className={`fa-solid ${
                    alert.color === "red"
                      ? "fa-circle-xmark"
                      : "fa-circle-check"
                  } text-xl`}
                ></i>
                <p className="font-bold text-smd">{alert.title}</p>
              </span>
              <i
                className="fa-solid fa-xmark text-secondary text-smd cursor-pointer"
                onClick={handleCloseAlert}
              ></i>
            </span>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Alert;
