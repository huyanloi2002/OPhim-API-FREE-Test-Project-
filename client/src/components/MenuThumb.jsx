import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMovieApi, movieByIdApi } from "../store/movies/moviesSlice";
import { alertAction } from "../store/alert/alertSlice";
import MenuShare from "./MenuShare";

const MenuThumb = () => {
  const dispatch = useDispatch();
  const { loading, message, movieById, is_like, movieDetails } = useSelector(
    (state) => state.movies
  );
  const { movie } = movieDetails;

  useEffect(() => {
    dispatch(movieByIdApi(movie._id));
  }, [movie, dispatch, message]);

  const handleCopyUrl = (dispatch) => {
    //Lấy link url hiện tại tại trang
    const url = window.location.href;
    //Copy url bằng navigator clipboard
    navigator.clipboard
      .writeText(url)
      .then(() => {
        dispatch(
          alertAction({
            title: "URL đã sao chép vào khay nhớ tạm.",
            color: "green",
          })
        );
      })
      .catch(() => {
        dispatch(
          alertAction({
            title: "URL chưa sao chép vào khay nhớ tạm.",
            color: "red",
          })
        );
      });
  };
  const handleOpenShareFB = () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(window.location.href);

    const title = "Chia sẻ bài viết";

    const windowFeatures = "left=600,top=50,width=700,height=800";

    //Mở new tab với url, title, kích thước tab
    const newWindow = window.open(url, title, windowFeatures);

    return newWindow;
  };
  const handleLikeMovie = ({ ...props }) => {
    const { id, dispatch } = props;
    dispatch(likeMovieApi(id));
  };

  useEffect(() => {
    if (loading === "fulfilled/like") {
      dispatch(
        alertAction({
          title: message,
          color: is_like ? "green" : "red",
        })
      );
    }
  }, [dispatch, message, loading, is_like]);

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
        handle: () => handleLikeMovie({ id: movie._id, dispatch }),
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
            handle: () => handleCopyUrl(dispatch),
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
    [movie._id, dispatch]
  );

  useEffect(() => {
    const textMenuLike = document.querySelector(".text-menu-like");
    textMenuLike.textContent = movieById.is_like ? "Đã yêu thích" : "Yêu thích";

    return () => {};
  }, [movieById]);

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
            onClick={item.handle}
          >
            <span className="inline-flex flex-col py-5 gap-1">
              <i
                className={`${item.icon} text-xl24 ${
                  movieById.is_like && item.key === "like"
                    ? `opacity-100 scale-125 ${item.color}`
                    : "opacity-70"
                } group-hover/list_menu:opacity-100 group-hover/list_menu:scale-125 duration-200 transition-all ease-in-out `}
              ></i>
              <p
                className={`text-smd font-bold text-light text-menu-${item.key}`}
              >
                {item.name}
              </p>
            </span>
            <MenuShare data={item.extras} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MenuThumb;
