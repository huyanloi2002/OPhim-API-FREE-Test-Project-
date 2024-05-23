import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieApi } from "../store/movies/moviesSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const Pagination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalPage } = useSelector((state) => state.movies);
  const [searchParams] = useSearchParams();

  let keywordParams = searchParams.get("keyword") || "";
  let pageParams = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    renderPageNumber(pageParams, totalPage);

    const handleClickPage = (item) => {
      dispatch(
        fetchMovieApi({
          keyword: keywordParams,
          page: item,
        })
      );
      navigate(
        `/movies?${
          keywordParams ? `keyword=${keywordParams}&` : ""
        }page=${item}`
      );
    };

    const pageItem = document.getElementsByClassName("page-item");
    for (let i = 0; i < pageItem.length; i++) {
      pageItem[i].addEventListener("click", (e) => {
        const dataPage = e.target.getAttribute("data-page");
        handleClickPage(dataPage);
      });
    }
    return () => {};
  }, [totalPage, pageParams, keywordParams, dispatch, navigate]);

  const renderPageNumber = (pageParams, totalPage) => {
    const pageNumber = document.getElementById("page-number");
    let startVisible = 1;
    let endVisible = pageParams - 2;
    let limitPagination = 4;

    if (pageParams <= totalPage) {
      let pagiantionHTML = "";
      if (pageParams < limitPagination) {
        for (let i = 1; i <= limitPagination; i++) {
          if (i <= totalPage) {
            pagiantionHTML += `<a class="page-item px-3 py-2 cursor-pointer text-secondary text-smd font-bold rounded-md ${
              pageParams === i ? "bg-primary" : "bg-light"
            }" data-page=${i}
            >${i}</a>`;
          }
        }
        pageNumber.innerHTML = pagiantionHTML;
      }

      if (pageParams >= limitPagination) {
        let flag = false;
        for (let i = 1; i <= pageParams + 2; i++) {
          if (i <= totalPage) {
            if (i > startVisible && !flag) {
              pagiantionHTML += `<a >...</a>`;
              flag = true;
            } else if (i < endVisible && flag) {
              continue;
            } else {
              pagiantionHTML += `<a class="page-item px-3 py-2 cursor-pointer text-secondary text-smd font-bold rounded-md ${
                pageParams === i ? "bg-primary" : "bg-light"
              }" data-page=${i}
              >${i}</a>`;
            }
          }
        }
        pageNumber.innerHTML = pagiantionHTML;
      }
    }
  };
  const handleNextPage = () => {
    let nextPage = pageParams + 1;
    dispatch(
      fetchMovieApi({
        keyword: keywordParams,
        page: nextPage,
      })
    );
    navigate(
      `/movies?${
        keywordParams ? `keyword=${keywordParams}&` : ""
      }page=${nextPage}`
    );
  };

  const handlePrevPage = () => {
    let prevPage = pageParams - 1;
    dispatch(
      fetchMovieApi({
        keyword: keywordParams,
        page: prevPage,
      })
    );
    navigate(
      `/movies?${
        keywordParams ? `keyword=${keywordParams}&` : ""
      }page=${prevPage}`
    );
  };

  return (
    <React.Fragment>
      <div className="w-full flex gap-2 justify-center items-center text-light">
        <div
          className={`cursor-pointer ${
            pageParams <= 1 && "pointer-events-none opacity-20"
          }`}
          onClick={handlePrevPage}
        >
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div
          id="page-number"
          className="list-none text-light flex gap-2 justify-center items-center"
        ></div>
        <div
          className={`cursor-pointer ${
            pageParams >= totalPage && "pointer-events-none opacity-20"
          }`}
          onClick={handleNextPage}
        >
          <i className="fa-solid fa-angles-right"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
