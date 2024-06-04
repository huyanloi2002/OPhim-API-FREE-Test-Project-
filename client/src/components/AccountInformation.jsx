import React, { useState } from "react";
import moment from "moment";
import { updateUserAction } from "../store/actions/userAction";
import { getUserCurrentAction } from "../store/actions/authAction";
import { alertAction } from "../store/slices/alertSlice";
import { useDispatch, useSelector } from "react-redux";

const AccountInformation = () => {
  const dispatch = useDispatch();
  const { details_user } = useSelector((state) => state.auth);

  const { isLoading, message } = useSelector((state) => state.user.updateUser);
  const access_token = localStorage.getItem("access_token");

  const [isShowEdit, setIsShowEdit] = useState(false);
  const editState = { username: details_user?.username };
  const [editData, setEditData] = useState(editState);

  const roles = [
    { id: 1, name: "Người dùng", key: "user" },
    { id: 2, name: "Quản trị viên", key: "admin" },
  ];

  const handleShowEdit = (e) => {
    e.stopPropagation();
    setIsShowEdit(!isShowEdit);
    if (isShowEdit) {
      setEditData(editState);
    }
  };

  const handleSubmitEdit = (e) => {
    e.stopPropagation();
    dispatch(
      updateUserAction({
        update: editData,
        token: `Bearer ${access_token}`,
      })
    ).then((result) => {
      if (result.payload.success) {
        console.log(message);
        setIsShowEdit(false);
        dispatch(getUserCurrentAction(`Bearer ${access_token}`));
        dispatch(
          alertAction({
            title: result.payload.msg,
            color: "green",
          })
        );
      }
    });
  };

  const handleChangeEdit = (e) => {
    const { name, value, files } = e.target;

    if (name === "editAvatar" && files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setEditData({ ...editData, avatar: reader.result });
        }
      };

      reader.readAsDataURL(files[0]);
    }

    setEditData({ ...editData, [name]: value });
    return () => {};
  };
  return (
    <React.Fragment>
      <div className="w-full h-full grid grid-rows-2">
        <div className="relative row-span-1 rounded-t-2xl w-full flex justify-center items-center">
          <div className="bg-purple h-full w-full rounded-t-2xl"></div>
          <div className="absolute aspect-square w-[120px] rounded-full bg-light shadow-2xl border-4 border-light">
            <img
              src={
                editData?.avatar && isShowEdit
                  ? editData?.avatar
                  : details_user?.avatar?.url
              }
              alt=""
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute bottom-[-2px] left-[-1px] w-[115px] h-[115px] overflow-hidden">
              <div
                className={`absolute top-0 rounded-full w-full h-full bg-[#0008] flex justify-center items-center duration-500 transition-all ease-in-out ${
                  isShowEdit ? "opacity-100" : "opacity-0"
                }`}
              >
                <i className="fa-solid fa-camera text-light"></i>
              </div>

              <input
                type="file"
                className={`absolute top-0 w-full h-full text-sm rounded-full bg-[#0003] opacity-0  ${
                  isShowEdit ? "pointer-events-auto" : "pointer-events-none"
                }`}
                title=""
                onChange={(e) => handleChangeEdit(e)}
                name="editAvatar"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 p-2">
            <div className="relative">
              <button
                className={`absolute right-[35px] text-smd font-bold bg-light h-[30px] w-[120px] shadow-xl rounded-full flex justify-center items-center px-3 z-10 animate-[show-edit_0.5s_ease-in-out]
                ${isShowEdit ? "block" : "hidden"}
                `}
                onClick={(e) => handleSubmitEdit(e)}
              >
                {!isLoading ? (
                  <p>Lưu thay đổi</p>
                ) : (
                  <div className="h-[15px] w-[15px] border-2 border-transparent border-t-2 border-l-2 border-t-secondary border-l-secondary rounded-full animate-spin"></div>
                )}
              </button>
              <i
                onClick={(e) => handleShowEdit(e)}
                className={`absolute right-0 ${
                  isShowEdit
                    ? "fa-solid fa-xmark text-red"
                    : "fa-solid fa-pen text-green-dark"
                } bg-light rounded-full cursor-pointer text-md shadow-xl h-[30px] w-[30px] z-10 flex justify-center items-center`}
              ></i>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex justify-center items-center">
          <div className="flex flex-col gap-1">
            {
              <span className="inline-flex items-center">
                <p className="w-[200px] font-semibold text-md">
                  Trang thái hoạt động:
                </p>
                <span
                  className={`inline-flex gap-2 items-center px-2 py-1 rounded-full shadow-md ${
                    details_user?.is_active ? "bg-green-dark" : "bg-red"
                  }`}
                >
                  <i className="fa-solid fa-circle text-light text-sm"></i>
                  <p className="text-light font-bold text-md">
                    {details_user?.is_active
                      ? "Đang hoạt động"
                      : "Không hoạt dộng"}
                  </p>
                </span>
              </span>
            }
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">Email:</p>
              <p className="text-sm14 italic">{details_user?.email}</p>
            </span>
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">Tên của bạn:</p>
              <div className="relative">
                {!isShowEdit ? (
                  <p className="absolute top-0 text-sm14 italic w-[200px] border border-transparent">
                    {details_user?.username}
                  </p>
                ) : (
                  <input
                    className="absolute top-0 left-[-10px] px-[0.62rem] rounded-full outline-none text-sm14 border border-[#0003] italic w-[200px] h-[23px] animate-[show-input_0.5s_ease-in-out]"
                    value={editData?.username}
                    onChange={(e) => handleChangeEdit(e)}
                    name="username"
                  />
                )}
              </div>
            </span>
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">Vai trò:</p>
              {roles.map((item, index) => (
                <p className="text-sm14 italic" key={index}>
                  {details_user?.role === item.key &&
                    `${item.name} (${item.key})`}
                </p>
              ))}
            </span>
            <span className="inline-flex">
              <p className="w-[200px] font-semibold text-md">
                Ngày tạo tài khoản:
              </p>
              <p className="text-sm14 italic">
                {details_user?.createdAt &&
                  `${moment(details_user?.createdAt).format(
                    "DD/MM/YYYY"
                  )} (${moment(details_user?.createdAt).fromNow()})`}
              </p>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountInformation;
