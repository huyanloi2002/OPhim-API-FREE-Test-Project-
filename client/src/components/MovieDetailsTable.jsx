import moment from "moment";
import React from "react";

const titleTable = [
  { name: "Thời lượng" },
  { name: "Tập hiện tại" },
  { name: "Tổng số tập" },
  { name: "Chất lượng" },
  { name: "Ngôn ngữ" },
  { name: "Lượt xem" },
  { name: "Ngày cập nhật" },
  { name: "Đạo diễn" },
];

const MovieDetailsTable = ({ data }) => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            {titleTable.map((item, index) => (
              <th key={index} className="border px-3 uppercase text-sm">
                {`${item.name}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-sm font-mdbold ">
            <td className="border lowercase py-2">{data?.time}</td>
            <td className="border py-2">{data?.episode_current}</td>
            <td className="border py-2">{data?.episode_total}</td>
            <td className="border py-2">
              <span className="bg-[crimson] inline-flex items-center px-2 rounded-sm font-bold">
                {data?.quality}
              </span>
            </td>
            <td className="border py-2 px-1">
              <span className="bg-[green] inline-flex items-center px-1 rounded-md font-bold">
                {data?.lang}
              </span>
            </td>
            <td className="border py-2">
              <span className="inline-flex items-center gap-1">
                <div>
                  <i className="fa-solid fa-eye"></i>
                </div>
                <p className="font-bold">{data?.view}</p>
              </span>
            </td>
            <td className="border py-2">
              {moment(data?.modified?.time).format("DD/MM/YYYY")}
            </td>
            <td className="border py-2 ">
              {data?.director &&
                data?.director.length > 0 &&
                data?.director.map((item, index) => (
                  <p key={index} className="line-clamp-1">
                    {item ? item : "Đang cập nhật"}
                  </p>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MovieDetailsTable;
