import React, { useState } from "react";
import Form from "../components/Form";

const Support = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const handleChangeImages = (e) => {
    const files = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImages([...previewImages, { url: reader.result }]);
      }
    };
    reader.readAsDataURL(files);
  };

  const handleDeleteImages = (indexArg, e) => {
    e.stopPropagation();

    const deleteImages = previewImages.filter(
      (item, index) => index !== indexArg
    );

    setPreviewImages(deleteImages);
  };
  return (
    <React.Fragment>
      <div className="inline-flex items-center gap-2 pb-2">
        <i className="fa-solid fa-circle text-smd"></i>
        <p className="text-md uppercase font-bold">Phiếu hỗ trợ</p>
      </div>
      <Form className="flex flex-col">
        <div className="inline-flex flex-col gap-2">
          <input
            type="email"
            name=""
            id=""
            className="outline-none border border-[#0003] rounded-md px-2 py-1 text-smd"
            placeholder="Nhập email..."
          />
          <input
            type="tel"
            name=""
            id=""
            className="outline-none border border-[#0003] rounded-md px-2 py-1 text-smd"
            placeholder="Nhập số điện thoại..."
          />
          <textarea
            name=""
            id=""
            className="outline-none border border-[#0003] rounded-md px-2 py-1 text-smd"
            placeholder="Nhập mô tả..."
            maxLength={500}
            rows={5}
          ></textarea>
          <div className="flex justify-start overflow-hidden gap-1 w-[215px]">
            {previewImages && previewImages.length < 3 && (
              <div className="inline-flex flex-col justify-center items-center relative w-[60px] h-[60px] text-[#0003] border-2 rounded-lg cursor-pointer">
                <i className="fa-regular fa-image text-xxx text-[#0003]"></i>
                <input
                  type="file"
                  className="absolute opacity-0 w-full h-full"
                  onChange={(e) => handleChangeImages(e)}
                />
              </div>
            )}
            {previewImages &&
              previewImages.length > 0 &&
              previewImages.map((item, index) => (
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
            Gửi phiếu
          </button>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Support;
