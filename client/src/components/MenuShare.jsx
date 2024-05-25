import React, { useState, useEffect } from "react";

const MenuShare = ({ data }) => {
  const [openShare, setOpenShare] = useState(false);

  useEffect(() => {
    const listMenu = document.querySelector(".list_menu_share");

    const handleMouseOver = () => {
      setOpenShare(true);
    };
    const handleMouseOut = () => {
      setOpenShare(false);
    };

    listMenu.addEventListener("mouseover", handleMouseOver);
    listMenu.addEventListener("mouseout", handleMouseOut);

    return () => {
      listMenu.removeEventListener("mouseover", handleMouseOver);
      listMenu.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <React.Fragment>
      {openShare && (
        <div>
          <div
            className="absolute top-[-30px] extra_menu"
            style={{ right: `-${data.length * 7}px` }}
          >
            <div className="grid grid-cols-2 gap-2 items-center px-3 bg-light rounded-full h-[40px] shadow-2xl">
              {data &&
                data.length > 0 &&
                data.map((extra) => (
                  <span
                    className="inline-flex col-span-1"
                    key={extra.id}
                    title={extra.name_extra}
                    onClick={extra.handle}
                  >
                    <li
                      className={`${extra.icon_extra} text-xl px-2 text-secondary ${extra.color} opacity-90 hover:opacity-100 hover:scale-105 duration-100 transition-all ease-in-out`}
                    ></li>
                  </span>
                ))}
            </div>
          </div>
          <div className="absolute bottom-[70px] right-[30px] z-50 border-t-[10px] border-t-light border-b-0 border-l-[10px] border-r-[10px] border-r-transparent border-l-transparent w-0 h-0"></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MenuShare;
