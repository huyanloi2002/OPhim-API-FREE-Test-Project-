import React, { useEffect, useState } from "react";

const DropdownMenu = ({ data, children }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const buttonDropDown = document.querySelector(".button-dropdown");

    const handleMouseOver = () => {
      setIsShow(true);
    };

    const handleMouseOut = () => {
      setIsShow(false);
    };

    buttonDropDown.addEventListener("mouseover", handleMouseOver);
    buttonDropDown.addEventListener("mouseout", handleMouseOut);

    return () => {
      buttonDropDown.removeEventListener("mouseover", handleMouseOver);
      buttonDropDown.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="button-dropdown relative">
        <button>{children}</button>
        {isShow && (
          <>
            <div className="absolute w-[20px] top-[40px] right-[10px] border-b-[10px] border-b-light border-l-[10px] border-l-transparent bord border-r-[10px] border-r-transparent border-t-0 cursor-pointer"></div>
            <div className="absolute top-[50px] left-[-50px] text-light flex flex-col bg-light rounded-md shadow-2xl w-[200px]">
              <ul className="w-full h-full text-secondary flex flex-col justify-center py-2">
                {data &&
                  data.length > 0 &&
                  data.map((item, index) => (
                    <li
                      key={index}
                      className="text-md font-mdbold flex cursor-pointer items-start gap-1 py-2 px-4 hover:bg-slate-100 duration-100 transition-all ease-in-out"
                      onClick={item.handle}
                    >
                      <i
                        className={`${item.icon} text-xl24 w-[30px] text-center`}
                      ></i>
                      <p>{item.name}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default DropdownMenu;
