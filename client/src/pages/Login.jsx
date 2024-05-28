import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/users/authSlice";
import { formLoginValidate } from "../utils/formValidate";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, success, type } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [validate, setValidate] = useState({});

  const userState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate.success) {
      dispatch(loginAction(user));
    }
  };

  useEffect(() => {
    const loginValidate = async () => {
      const result = await formLoginValidate({ ...user });
      setValidate(result);
    };
    loginValidate();

    return () => {};
  }, [user]);

  useEffect(() => {
    if (success && type === "login") {
      navigate("/");
    }
    return () => {};
  }, [success, navigate, type]);

  return (
    <React.Fragment>
      <div className="fixed top-0 z-20 w-full h-full flex justify-center items-center bg-[#0007]">
        <div className="grid grid-cols-1 w-[300px] h-[400px] bg-light rounded-md shadow-white shadow-md animate-[opacity_1s_ease-in-out]">
          <div className="col-span-1 flex flex-col h-full justify-center p-5 gap-4">
            <p className="text-xxl font-bold text-center uppercase">
              Đăng nhập
            </p>
            <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col relative justify-start">
                <i className="fa-solid fa-envelope absolute p-[0.60rem] m-1 bg-secondary text-light rounded-full text-sm"></i>
                <input
                  type="email"
                  name="email"
                  className={`pl-10 pr-7 py-2 text-smd tracking-wide font-mdbold outline-none rounded-full bg-input border-2 ${
                    !validate?.success &&
                    validate?.type === "email" &&
                    "border-red"
                  } `}
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                />
                {!validate.success && validate.type === "email" && (
                  <span className="text-xsm font-bold px-2 pt-[0.15rem] text-red italic">
                    {validate.message && `*${validate.message}`}
                  </span>
                )}
              </div>
              <div className="flex flex-col relative justify-start">
                <i className="fa-solid fa-lock absolute p-[0.60rem] m-1 bg-secondary text-light rounded-full text-sm"></i>
                <input
                  type="password"
                  name="password"
                  className={`pl-10 pr-7 py-2 text-smd tracking-wide font-mdbold outline-none rounded-full bg-input border-2 ${
                    !validate?.success &&
                    validate?.type === "password" &&
                    "border-red"
                  } `}
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                />
                {!validate.success && validate.type === "password" && (
                  <span className="text-xsm font-bold px-2 pt-[0.15rem] text-red italic">
                    {validate.message && `*${validate.message}`}
                  </span>
                )}
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <button
                  type="submit"
                  disabled={loading ? true : false}
                  className="rounded-full bg-primary py-2 font-bold w-[60%] text-md shadow-md duration-300 transition-all ease-in-out hover:bg-secondary hover:text-primary"
                >
                  {loading ? "Loading..." : "Đăng nhập"}
                </button>
                <span className="inline-flex gap-1 items-center">
                  <p className="text-sm">Bạn chưa có tài khoản?</p>
                  <Link
                    to="/register"
                    className="underline font-mdbold text-smd text-primary"
                  >
                    Đăng ký
                  </Link>
                </span>
              </div>
            </Form>
          </div>
          {/* <div className="col-span-1 bg-primary rounded-r-md"></div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
