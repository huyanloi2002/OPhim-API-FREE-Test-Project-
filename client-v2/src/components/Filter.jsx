import React, { useEffect, useState } from "react";
import Title from "./Title";
import { IoFilterCircleOutline } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";

import { Select, Radio } from "./Select";
import { Button } from "./Button";
import {
  type_movie,
  categories,
  countries,
  years,
  status_movie,
  sub_movie,
} from "../data/filterData";

const Filter = () => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");
  const [sub, setSub] = useState("");

  useEffect(() => {
    const btnReset = document.querySelector(".btn-reset");
    if (type || category || country || year || status || sub) {
      btnReset.classList.add("flex");
      btnReset.classList.remove("hidden");
    } else {
      btnReset.classList.add("hidden");
      btnReset.classList.remove("flex");
    }
  }, [type, category, country, year, status, sub]);

  const handleReset = () => {
    setType("");
    setCategory("");
    setCountry("");
    setYear("");
    setStatus("");
    setSub("");
  };
  console.log(category);

  return (
    <React.Fragment>
      <div className="h-full w-full flex flex-col gap-2 text-light bg-light p-3 rounded-3xl">
        <div className="flex items-start justify-between h-[35px]">
          <Title
            icon={<IoFilterCircleOutline className="text-lg" />}
            text="Bộ lọc tìm kiếm"
            className="text-dark font-bold"
          />
          <button
            onClick={() => handleReset()}
            className="btn-reset gap-1 h-[30px] text-red-dark items-center border px-2 py-[0.15rem] rounded-full border-red-dark hover:px-3 duration-200 transition-all ease-in-out"
          >
            <FaRegCircleXmark />
            <p className="text-md">Reset</p>
          </button>
        </div>
        <div className="flex flex-col justify-between gap-2 h-full">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <Select
                name="name"
                value="key_vn"
                title="Nội dung"
                data={type_movie}
                setValue={[type, setType]}
                defaultName="Chọn nội dung phim"
                classNameSelect="bg-light text-dark w-full h-[40px] rounded-full text-md border-2"
                classNameOption="border-2"
              />
              <Select
                name="name"
                value="key_vn"
                title="Thể loại"
                data={categories}
                setValue={[category, setCategory]}
                defaultName="Chọn thể loại"
                classNameSelect="bg-light text-dark w-full h-[40px] rounded-full text-md border-2"
                classNameOption="border-2"
                heightOption="195px"
              />
              <Select
                name="name"
                value="key_vn"
                title="Quốc gia"
                image="link_flag"
                data={countries}
                setValue={[country, setCountry]}
                defaultName="Chọn quốc gia"
                classNameSelect="bg-light text-dark w-full h-[40px] rounded-full text-md border-2"
                classNameOption="border-2"
                heightOption="155px"
              />
              <Select
                name="name"
                value="key_vn"
                title="Năm"
                data={years}
                setValue={[year, setYear]}
                defaultName="Chọn năm phát hành"
                classNameSelect="bg-light text-dark w-full h-[40px] rounded-full text-md border-2"
                classNameOption="border-2"
                heightOption="115px"
              />
            </div>
            <div className="flex justify-between px-3">
              <div className="flex flex-col gap-1">
                <p className="text-dark font-bold text-md">Trạng thái:</p>
                <div className="flex flex-col justify-center">
                  {status_movie.map((item, index) => (
                    <Radio
                      key={index}
                      item={item}
                      name="name"
                      value="key_vn"
                      setValue={[status, setStatus]}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-dark font-bold text-md">Ngôn ngữ:</p>
                <div className="flex flex-col justify-center">
                  {sub_movie.map((item, index) => (
                    <Radio
                      key={index}
                      item={item}
                      name="name"
                      value="key_vn"
                      setValue={[sub, setSub]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            title="Tìm kiếm"
            className="rounded-full py-2 font-bold duration-200 transition-all ease-in-out bg-green-dark text-light hover:bg-green-darker"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filter;
