import React, { useCallback, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Slide = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      if (prev >= children.length - 1) {
        setCurrentSlide(0);
      }
      return prev + 1;
    });
  }, [children]);

  const handleClickPaginationSlide = (prev) => {
    setCurrentSlide(prev);
  };

  return (
    <React.Fragment>
      <div className="h-full w-full relative overflow-hidden rounded-3xl">
        <div
          className="h-full w-full flex duration"
          style={{
            transition: "all 0.5s ease-in-out",
            transform: `translateX(-${100 * currentSlide}%)`,
          }}
        >
          {children.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              {item}
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 px-8 py-8 rounded-3xl w-[50%] h-full flex flex-col justify-between items-end z-10">
          <div className="flex flex-row gap-3 items-center">
            <span
              className="h-[40px] w-[40px] border rounded-full flex justify-center items-center cursor-pointer"
              onClick={handlePrevSlide}
            >
              <HiOutlineChevronLeft className="text-lg text-light" />
            </span>
            <span
              className="h-[40px] w-[40px] border rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => handleNextSlide()}
            >
              <HiOutlineChevronRight className="text-lg text-light" />
            </span>
          </div>
          <ul className="flex gap-2">
            {children.map((item, index) => (
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slide;
