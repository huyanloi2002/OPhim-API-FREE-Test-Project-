import React, { useEffect, useMemo, useState } from "react";

const MenuThumb = () => {
  const [openShare, setOpenShare] = useState(false);

  const menuThumb = useMemo(
    () => [
      {
        id: 1,
        key: "play",
        name: "Xem phim",
        icon: "fa-solid fa-play",
        color: "text-green",
        handle: () => {},
        extras: [],
      },
      {
        id: 2,
        key: "watchlist",
        name: "Danh sách",
        icon: "fa-solid fa-bookmark",
        color: "text-yellow",
        handle: () => {},
        extras: [],
      },
      {
        id: 3,
        key: "like",
        name: "Yêu thích",
        icon: "fa-solid fa-heart",
        color: "text-red",
        handle: () => {},
        extras: [],
      },
      {
        id: 5,
        name: "Chia sẻ",
        key: "share",
        icon: "fa-solid fa-share",
        color: "text-blue-purple",
        handle: () => {},
        extras: [
          {
            id: 1,
            name_extra: "Sao chép liên kết",
            icon_extra: "fa-solid fa-copy",
            handle: () => handleCopyUrl(),
            color: "text-[#8aa149]",
          },
          {
            id: 2,
            name_extra: "Chia sẻ Facebook",
            icon_extra: "fa-brands fa-facebook",
            handle: () => handleOpenShareFB(),
            color: "text-[#436496]",
          },
        ],
      },
    ],
    []
  );

  const handleCopyUrl = () => {
    //Lấy link url hiện tại tại trang
    const url = window.location.href;
    //Copy url bằng navigator clipboard
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard");
      })
      .catch((err) => {
        alert("Failed to copy URL:", err);
      });
  };

  const handleOpenShareFB = () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=https://www.justwatch.com/us/movies";

    const title = "Chia sẻ bài viết";

    const windowFeatures = "left=600,top=50,width=700,height=800";

    const newWindow = window.open(url, title, windowFeatures);

    return newWindow;
  };

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
      <div
        className="absolute bottom-0 grid grid-cols-4 w-full gap-2 text-light bg-gray rounded-b-md opacity-0 duration-500 transition-all ease-in-out 
        group-hover/menu:opacity-100"
      >
        {menuThumb.map((item, index) => (
          <div
            className={`col-span-1 text-center cursor-pointer list_menu_${item.key} group/list_menu`}
            key={index}
          >
            <span className="inline-flex flex-col py-5 gap-1">
              <i
                className={`${item.icon} text-xl24 ${item.color} opacity-70 group-hover/list_menu:opacity-100 group-hover/list_menu:scale-125 duration-200 transition-all ease-in-out `}
              ></i>
              <p className="text-smd font-bold text-light">{item.name}</p>
            </span>
            {openShare && (
              <div>
                <div
                  className="absolute top-[-30px] extra_menu"
                  style={{ right: `-${item.extras.length * 7}px` }}
                >
                  <div className="grid grid-cols-2 gap-2 items-center px-3 bg-light rounded-full h-[40px] shadow-2xl">
                    {item.extras &&
                      item.extras.length > 0 &&
                      item.extras.map((extra) => (
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
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MenuThumb;
