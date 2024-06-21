import React, { useCallback, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Slide = ({
  children,
  previewSlide = 1,
  spaceSlide = 0,
  rounded = "1.5rem",
  stylePrevPagination = "",
  styleNextPagination = "",
  styleDotPagination = "",
  isDotPagination = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalPagination = Math.floor((children.length - 1) / previewSlide);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev >= totalPagination) {
        setCurrentSlide(0);
      }
      return prev + 1;
    });
  }, [totalPagination]);

  const handleClickPaginationSlide = (prev) => {
    setCurrentSlide(prev);
  };

  return (
    <React.Fragment>
      <div
        className="h-full w-full relative overflow-hidden flex z-50 items-center"
        style={{ borderRadius: rounded }}
      >
        <div
          className="h-full w-full flex flex-nowrap"
          style={{
            transition: "all 0.5s ease-in-out",
            transform: `translateX(${-100 * currentSlide}%)`,
          }}
        >
          {children.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${100 / previewSlide}%`,
                paddingLeft: `${spaceSlide}px`,
                paddingRight: `${spaceSlide}px`,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <span
          className={`!absolute ${
            stylePrevPagination ? stylePrevPagination : "left-0"
          }  h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer bg-light text-dark shadow-2xl`}
          onClick={handlePrevSlide}
        >
          <HiOutlineChevronLeft className="text-lg" />
        </span>
        <span
          className={`!absolute ${
            styleNextPagination ? styleNextPagination : "right-0"
          } h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer bg-light text-dark shadow-2xl`}
          onClick={() => handleNextSlide()}
        >
          <HiOutlineChevronRight className="text-lg" />
        </span>
        {isDotPagination && (
          <ul className={`flex gap-2 !absolute bottom-0 ${styleDotPagination}`}>
            {children.slice(0, totalPagination + 1).map((item, index) => (
              <li
                key={index}
                className={`${
                  currentSlide === index
                    ? "w-[50px] h-[10px] bg-light"
                    : "w-[10px] h-[10px] bg-opacity-white-0.5"
                } rounded-full cursor-pointer duration-300 transition-all ease-in-out`}
                onClick={() => handleClickPaginationSlide(index)}
              ></li>
            ))}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

export default Slide;
