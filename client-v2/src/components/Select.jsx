import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { FaCircleDot } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

export const Select = ({
  data,
  setValue,
  name,
  value,
  image = "",
  icon = "",
  title = "",
  heightOption = "230px",
  defaultName = "Choose a select",
  classNameSelect = "",
  classNameOption = "",
}) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const [valueSelect, setValueSelect] = useState("");
  const [nameSelect, setNameSelect] = useState(`- ${defaultName} -`);

  const handleSelect = (item) => {
    const Icon = item[icon];
    setValueSelect(item[value]);
    setNameSelect(
      <div className="flex flex-row gap-1">
        {title && <p className="w-[70px]">{`${title}:`}</p>}
        <span className="flex gap-2 items-center">
          <p>{item[name]}</p>
          {image && (
            <img src={item[image]} alt="flag" className="w-[20px] rounded-sm" />
          )}
          {icon && (
            <span>
              <Icon />
            </span>
          )}
        </span>
      </div>
    );
    setValue[1](item[value]);
  };

  let selectRef = useRef(null);

  useEffect(() => {
    const selectRefCurrent = selectRef.current;

    const handleBlur = () => {
      setIsShowOption(false);
    };

    selectRefCurrent.addEventListener("blur", handleBlur);

    return () => {
      selectRefCurrent.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className={`relative cursor-pointer ${classNameSelect} outline-none  border`}
        tabIndex="0"
        onClick={() => setIsShowOption(!isShowOption)}
        ref={selectRef}
      >
        <div className="w-full h-full flex items-center justify-between px-4 font-bold">
          {!setValue[0] ? `- ${defaultName} -` : nameSelect}
          <GoChevronDown className="text-lg" />
        </div>
        {isShowOption && (
          <ul
            className={`bg-light text-dark flex flex-col absolute mt-1 w-full overflow-y-scroll rounded-lg z-10 border  ${classNameOption}`}
            style={{ maxHeight: `${heightOption}` }}
          >
            {data.map((item, index) => {
              let Icon = item[icon];
              return (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className={`border-b py-2 px-4 bg-light hover:bg-slate-100 last:border-b-0 duration-100 transition-all ease-in-out flex items-center justify-between ${
                    valueSelect === item.key_vn
                      ? "bg-slate-300 hover:bg-slate-300"
                      : "bg-light"
                  }`}
                >
                  <span className="flex gap-2 items-center">
                    {image && (
                      <img
                        src={item[image]}
                        alt="flag"
                        className="w-[20px] rounded-sm"
                      />
                    )}
                    {icon && (
                      <span>
                        <Icon />
                      </span>
                    )}
                    <span>{item[name]}</span>
                  </span>
                  {valueSelect === item.key_vn && (
                    <CiCircleCheck className="text-lg text-green-dark font-bold" />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

export const Radio = ({ item, name, value, setValue }) => {
  return (
    <React.Fragment>
      <span
        className="flex flex-row gap-2 items-center cursor-pointer"
        onClick={() => setValue[1](item[value])}
      >
        <button className="text-dark text-sm border-2 border-slate-500 rounded-full h-[15px] aspect-square flex items-center justify-center">
          {setValue[0] === item[value] && (
            <FaCircleDot className="text-[15px] p-[0.05rem] text-slate-500" />
          )}
        </button>
        <p className="text-dark text-md font-b500">{item[name]}</p>
      </span>
    </React.Fragment>
  );
};
