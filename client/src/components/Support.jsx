import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { createSupportAction } from "../store/actions/supportAction";
import { alertAction } from "../store/slices/alertSlice";
import Dropdown from "./Dropdown";
import MySupport from "./MySupport";
import { getMySupportAction } from "../store/actions/supportAction";

const Support = () => {
  const access_token = localStorage.getItem("access_token");
  const dispatch = useDispatch();
  const { my_support, isLoading } = useSelector((state) => state.support);
  const [images, setImages] = useState([]);

  const supportState = {
    title: "",
    phone_number: "",
    description: "",
  };
  const [supportData, setSupportData] = useState(supportState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSupportData({ ...supportData, [name]: value });
  };

  const handleChangeImages = (e) => {
    const files = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImages([...images, { url: reader.result }]);
      }
    };

    reader.readAsDataURL(files);
  };

  const handleDeleteImages = (indexArg, e) => {
    e.stopPropagation();

    const deleteImages = images.filter((item, index) => index !== indexArg);

    setImages(deleteImages);
  };

  const handleSubmitSupport = (e) => {
    e.preventDefault();

    dispatch(
      createSupportAction({
        support: { ...supportData, images },
        token: `Bearer ${access_token}`,
      })
    ).then((result) => {
      if (result.payload.success) {
        dispatch(
          alertAction({
            title: result.payload.msg_vn,
            color: "green",
          })
        );
        dispatch(getMySupportAction(`Bearer ${access_token}`));
        setSupportData({ title: "", phone_number: "", description: "" });
        setImages([]);
      }
    });
  };

  useEffect(() => {
    dispatch(getMySupportAction(`Bearer ${access_token}`));
  }, [dispatch, access_token]);

  console.log(my_support);
  return (
    <React.Fragment>
      <div
        className={`py-2 px-3 flex flex-col ${
          isLoading ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div className="flex justify-between items-center pb-2">
          <div className="inline-flex items-center gap-2">
            <i className="fa-solid fa-circle text-smd"></i>
            <p className="text-md uppercase font-bold">Phiếu hỗ trợ</p>
          </div>
          <Dropdown
            nameButton={<i className="fa-solid fa-headset"></i>}
            width="w-[215px]"
            height="h-[300px]"
          >
            <MySupport data={my_support} />
          </Dropdown>
        </div>
        <Form className="flex flex-col" onSubmit={handleSubmitSupport}>
          <div className="inline-flex flex-col gap-2">
            <input
              type="text"
              name="title"
              id=""
              className="outline-none border border-[#0003] rounded-md px-2 py-1 text-smd"
              placeholder="Nhập tiều đề..."
              onChange={(e) => handleChange(e)}
              value={supportData.title}
            />
            <input
              type="tel"
              name="phone_number"
              id=""
              className="outline-none border border-[#0003] rounded-md px-2 py-1 text-smd"
              placeholder="Nhập số điện thoại liên hệ..."
              onChange={(e) => handleChange(e)}
              value={supportData.phone_number}
            />
            <textarea
              name="description"
              id=""
              className="outline-none border border-[#0003] rounded-md px-2 py-1 text-smd"
              placeholder="Nhập mô tả..."
              maxLength={500}
              rows={5}
              onChange={(e) => handleChange(e)}
              value={supportData.description}
            ></textarea>
            <div className="flex justify-start overflow-hidden gap-1 w-[215px]">
              {images && images.length < 3 && (
                <div className="inline-flex flex-col justify-center items-center relative w-[60px] h-[60px] text-[#0003] border-2 rounded-lg cursor-pointer">
                  <i className="fa-regular fa-image text-xxx text-[#0003]"></i>
                  <input
                    type="file"
                    name="images[]"
                    className="absolute opacity-0 w-full h-full"
                    onChange={(e) => handleChangeImages(e)}
                  />
                </div>
              )}
              {images &&
                images.length > 0 &&
                images.map((item, index) => (
                  <div key={index} className="w-[70px] h-[60px] relative">
                    <img
                      src={item.url}
                      alt={`images-${index}`}
                      className="w-full h-full object-cover border-2 border-[#0003] rounded-md"
                    />
                    <i
                      className="absolute top-0 right-0 fa-solid fa-xmark text-light text-sm cursor-pointer bg-red rounded-full px-[0.15rem] py-[0.05rem]"
                      onClick={(e) => handleDeleteImages(index, e)}
                    ></i>
                  </div>
                ))}
            </div>
            <button
              type="submit"
              className="bg-primary text-md font-semibold py-1 rounded-full border-2 border-transparent
                  transition-all duration-200 ease-in-out text-light
                hover:bg-light hover:text-primary hover:border-primary"
            >
              {isLoading ? "Loading..." : "Gửi phiếu"}
            </button>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Support;
