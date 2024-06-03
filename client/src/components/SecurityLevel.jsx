import React, { useState, useMemo } from "react";
import {
  sendMailAction,
  verifyEmailAction,
  verifyIdentifyAction,
} from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { alertAction } from "../store/slices/alertSlice";

const SecurityLevel = () => {
  const dispatch = useDispatch();
  const [numberVerify, setNumberVerify] = useState("");
  const [numberIdentify, setNumberIdentify] = useState("");
  const { details_user } = useSelector((state) => state.auth);
  const isVerify = details_user?.isVerify;
  const identify = details_user?.identify;

  const [countDownResend, setCountDownResend] = useState(10);

  const timerResend = () => {
    const countDown = setInterval(() => {
      setCountDownResend((prev) => {
        if (prev === 0) {
          clearInterval(countDown);
          return prev;
        } else {
          return prev - 1;
        }
      });
      return () => {
        clearInterval(countDown);
      };
    }, [1000]);
  };

  const calculateStrokeCircle = (isVerify, identify) => {
    let strokeDasharray = 370;
    let strokeDashoffset = 180;
    let status = "Trung bình";

    if (isVerify && identify) {
      strokeDasharray += 10;
      strokeDashoffset -= 180;
      status = "Mạnh";
    } else if (isVerify || identify) {
      strokeDasharray += 5;
      strokeDashoffset -= 90;
      status = "Khá mạnh";
    }

    return {
      strokeDasharray,
      strokeDashoffset,
      status,
    };
  };

  const { strokeDasharray, strokeDashoffset, status } = useMemo(
    () => calculateStrokeCircle(isVerify, identify),
    [isVerify, identify]
  );

  const handleChangeNumber = (e) => {
    const { value } = e.target;

    if (value.length <= 6) {
      setNumberVerify(value);
    }
  };

  const handleNumberIdentify = (e) => {
    const { value } = e.target;

    if (value.length <= 12) {
      setNumberIdentify(value);
    }
  };

  const access_token = localStorage.getItem("access_token");
  const handleSendMail = () => {
    dispatch(sendMailAction(`Bearer ${access_token}`)).then((result) => {
      if (result.payload.success) {
        dispatch(
          alertAction({
            title: result.payload.msg,
            color: "green",
          })
        );
        timerResend();
      }
    });
  };

  const handleVerifyEmail = () => {
    dispatch(
      verifyEmailAction({
        otp: numberVerify,
        token: `Bearer ${access_token}`,
      })
    ).then((result) => {
      if (result.payload.success) {
        dispatch(
          alertAction({
            title: result.payload.msg,
            color: "green",
          })
        );
      }
    });
  };

  const handleVerifyIdentify = () => {
    dispatch(
      verifyIdentifyAction({
        number_identify: numberIdentify,
        token: `Bearer ${access_token}`,
      })
    ).then((result) => {
      if (result.payload.success) {
        dispatch(
          alertAction({
            title: result.payload.msg,
            color: "green",
          })
        );
      }
    });
  };

  console.log(numberVerify);

  return (
    <React.Fragment>
      <div className="inline-flex items-center gap-2">
        <i className="fa-solid fa-circle text-smd"></i>
        <p className="text-md uppercase font-bold">Mức độ bảo mật</p>
      </div>
      <div className="w-full h-full grid grid-cols-5 grid-rows-2">
        <div className="col-span-2 row-span-2 flex justify-center items-center relative">
          <svg className="w-[150px] bg-light transform rotate-90 bg-transparent absolute shadow-xl rounded-full">
            <circle
              className="stroke-current stroke-[20] text-green-dark animate-[spin-border_1s_ease-in-out] w-full"
              fill="transparent"
              cx="75"
              cy="75"
              r="60"
              style={{
                strokeDasharray: strokeDasharray,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>
          <div className="w-[140px] h-[140px] rounded-full border-[20px] border-[#0003] inline-flex justify-center items-center">
            <p className="font-bold uppercase text-[#0007] z-10 text-sm">
              {status}
            </p>
          </div>
        </div>
        <div className="col-span-3 row-span-2 grid grid-rows-2 w-[400px] items-center px-2">
          <div className="row-span-1 p-1 inline-flex flex-col items-start">
            <p className="underline text-md font-bold">1. Xác thực email:</p>
            <blockquote className="text-sm italic text-red font-medium px-1">
              *Tài khoản của bạn chưa xác thực email. Email của bạn đã xuất hiện
              ở bên dưới, bạn đã có thể xác thực:
            </blockquote>
            <div className="inline-flex gap-1 p-1">
              <input
                type="email"
                value={details_user?.email ? details_user?.email : ""}
                className="border border-[#0003] rounded-sm text-sm14 px-2 py-1 outline-none w-[200px]"
                disabled={true}
              />
              <button
                className="text-sm px-2 rounded-sm bg-red font-bold text-light"
                onClick={() => handleSendMail()}
              >
                {countDownResend === 0 || countDownResend === 10
                  ? "Lấy mã"
                  : `${countDownResend}`}
              </button>
            </div>
            <div className="inline-flex justify-end items-center gap-1 p-1 relative">
              <input
                type="number"
                className="border border-[#0003] rounded-sm px-2 py-1 outline-none font-bold text-smd w-[200px]"
                onChange={(e) => handleChangeNumber(e)}
                value={numberVerify}
                placeholder="Nhập mã..."
              />
              <button
                className="text-sm px-2 bg-green-dark rounded-sm text-light font-bold absolute py-1 mr-[0.10rem]"
                onClick={() => handleVerifyEmail()}
              >
                Xác thực
              </button>
            </div>
          </div>
          <div className="row-span-1 p-1 inline-flex flex-col items-start">
            <p className="underline text-md font-bold">
              2. Xác thực CCCD/CMND:
            </p>
            <blockquote className="text-sm italic text-red font-medium px-1">
              *Tài khoản của bạn chưa xác thực mã định danh. Bạn có thể nhập mã
              định danh ở phía bên dưới để xác thực:
            </blockquote>
            <div className="inline-flex justify-end items-center gap-1 p-1 relative">
              <input
                type="number"
                className="border border-[#0003] rounded-sm px-2 py-1 outline-none font-bold text-smd w-[260px]"
                onChange={(e) => handleNumberIdentify(e)}
                value={numberIdentify}
                placeholder="Nhập mã..."
              />
              <button
                className="text-sm px-2 bg-green-dark rounded-sm text-light font-bold absolute py-1 mr-[0.10rem]"
                onClick={() => handleVerifyIdentify()}
              >
                Xác thực
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecurityLevel;
