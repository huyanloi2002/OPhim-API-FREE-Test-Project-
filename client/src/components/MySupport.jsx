import React, { useState } from "react";
import moment from "moment";
import image_default from "../assets/images/img_default.jpg";

const MySupport = ({ data }) => {
  const [isExtends, setIsExtends] = useState(false);
  const [selectedExtends, setSelectedExtends] = useState(null);

  const handleIsExtend = (index) => {
    setSelectedExtends(index);
    setIsExtends(!isExtends);
  };

  const statusSuport = [
    { id: 1, name: "Chưa xác nhận", key: "Unconfirmed", color: "crimson" },
    { id: 2, name: "Đã xác nhận", key: "Confirmed", color: "yellow" },
    { id: 3, name: "Đã giải quyết", key: "Resolved", color: "green" },
  ];

  return (
    <React.Fragment>
      <div className="h-full w-full flex flex-col pb-2">
        <p className="text-md14 font-bold px-2 py-1">* Phiếu hỗ trợ của bạn</p>
        <div className="h-full w-full overflow-y-scroll">
          {data &&
            data.length &&
            data.map((item, index) => (
              <div className="w-full flex flex-col" key={index}>
                <span
                  className="flex px-1 h-[60px] items-center gap-2 border border-transparent border-b-[#0003] cursor-pointer bg-slate-200"
                  onClick={() => handleIsExtend(index)}
                >
                  <img
                    src={
                      item.images.length > 0
                        ? item.images[0].url
                        : image_default
                    }
                    alt="images-main"
                    className="w-[45px] h-[45px] object-cover rounded-full border-2 border-[#0003]"
                  />
                  <span className="flex flex-col items-start">
                    <p className="text-smd font-semibold truncate w-[150px]">
                      {item.title}
                    </p>
                    <span className="inline-flex flex-col">
                      <p className="text-xsm">
                        {moment(item.createdAt).fromNow()}
                      </p>

                      {statusSuport.map((status, index) => {
                        if (status.key === item.status) {
                          return (
                            <span
                              key={index}
                              className="inline-flex items-center gap-1"
                              style={{ color: `${status.color}` }}
                            >
                              <i className="fa-solid fa-circle text-[8px]"></i>
                              <p className="font-bold text-sm">{status.name}</p>
                            </span>
                          );
                        }
                      })}
                    </span>
                  </span>
                </span>
                {isExtends && selectedExtends === index && (
                  <div className=" p-1 w-full grid grid-cols-4 gap-1 text-sm cursor-default">
                    <div className="inline-flex col-span-4 gap-1">
                      <p className="font-bold underline">Email:</p>
                      <p>{item.email}</p>
                    </div>
                    <div className="inline-flex col-span-4 gap-1">
                      <p className="font-bold underline">Số điện thoại:</p>
                      <p>{item.phone_number}</p>
                    </div>
                    <div className="inline-flex col-span-4 gap-1">
                      <p className="font-bold underline">Ngày tạo:</p>
                      <p>{moment(item.createdAt).format("DD/MM/YYYY")}</p>
                    </div>
                    <div className="inline-flex flex-col col-span-4 gap-1">
                      <p className="font-bold underline">Tiêu đề:</p>
                      <p className="px-[0.05px] uppercase font-semibold">
                        {`${item.title}`}
                      </p>
                    </div>
                    <div className="inline-flex flex-col col-span-4">
                      <p className="font-bold underline">Mô tả:</p>
                      <p className="italic">{`${item.description}`}</p>
                    </div>
                    <div className="col-span-4 flex gap-1 w-full">
                      {item.images &&
                        item.images.length > 0 &&
                        item.images.map((image, index) => (
                          <img
                            src={image.url}
                            alt={`image-${index}`}
                            key={index}
                            className="object-cover w-[60px] h-[40px] aspect-square rounded-sm border border-[#0003]"
                          />
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MySupport;
