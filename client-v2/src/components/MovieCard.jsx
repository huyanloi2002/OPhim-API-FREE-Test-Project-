import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoIosBook } from "react-icons/io";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsFillHeartFill } from "react-icons/bs";

import Title from "../components/Title";

import imdb from "../assets/logo-reviews/imdb.png";
import tmdb from "../assets/logo-reviews/tmdb.png";

export const MovieCardHorizontal = () => {
  return (
    <React.Fragment>
      <div className="flex gap-3 w-full max-h-[114px] items-center bg-opacity-white-0.8 text-dark p-2 rounded-xl overflow-hidden cursor-pointer relative">
        <div className="flex items-center">
          <img
            src="https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc="
            alt="poster_url"
            className="h-auto object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col text-sm gap-[0.3rem]">
          <p className="text-md w-[155px] font-b700 line-clamp-1">
            Deadpool & Wolverines
          </p>
          <div className="flex gap-1 text-sm">
            <p className="bg-dark text-light px-2 rounded-full">Action</p>
            <p className="bg-dark text-light px-2 rounded-full">Adventure</p>
            <p className="bg-dark text-light px-2 rounded-full">Comedy</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="inline-flex items-end gap-1">
              <img
                src={imdb}
                alt="imdb"
                className="W-[15px] h-[15px] object-cover rounded-full"
              />
              <span className="font-bold">8.6</span>
            </span>
            <span className="inline-flex items-end gap-1">
              <img
                src={tmdb}
                alt="tmdb"
                className="W-[15px] h-[15px]  object-cover rounded-full"
              />
              <span className="font-bold">7.3</span>
            </span>
          </div>
          <div className="flex gap-1 text-md13 text-[orange]">
            <div className="flex gap-[0.5remm] items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-sm font-b800 bg-[orange] text-light rounded-full px-2 flex items-center">
              4.7
            </p>
          </div>
          <span className="inline-flex items-center gap-1">
            <p className="bg-red-dark text-light font-b900 px-2 rounded-md">
              FHD
            </p>
            <p className="bg-green-dark text-light font-b900 px-2 rounded-md">
              Vietsub
            </p>
          </span>
        </div>
        <div className="absolute bottom-[5px] right-[5px]">
          <HiMiniPlayCircle className="text-dark text-xxl cursor-pointer" />
        </div>
      </div>
    </React.Fragment>
  );
};



export const MovieCardRecentt = () => {
  return (
    <React.Fragment>
      <div className="flex w-full h-[60px] items-center justify-between bg-opacity-white-0.1 text-dark rounded-xl overflow-hidden cursor-pointer p-2">
        <div className="flex gap-3 items-center w-[80%]">
          <img
            src="https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc="
            alt="poster_url"
            className="h-[50px] aspect-square object-cover rounded-lg"
          />
          <div className="flex flex-col gap-[0.15rem] w-[150px]">
            <p className="text-xmd w-full font-b700 line-clamp-1">
              Deadpool & Wolverine
            </p>
            <ul className="flex gap-1">
              <li className="text-sm text-dark inline-flex items-center gap-[0.10rem] px-2 rounded-full bg-opacity-white-0.5">
                <p>
                  <FaPlay />
                </p>
                <p className="font-b700">1h 27m</p>
              </li>
              <li className="text-sm text-dark inline-flex items-center gap-[0.10rem] px-2 rounded-full bg-opacity-white-0.5">
                <p>
                  <IoIosBook />
                </p>
                <p className="font-b700">Full</p>
              </li>
            </ul>
            <div className="text-sm text-dark inline-flex items-center gap-[0.15rem] px-2">
              <p>
                <GoClockFill />
              </p>
              <p>a hour ago</p>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <HiMiniPlayCircle className="text-dark text-xxl cursor-pointer mx-auto filter drop-shadow-xl" />
        </div>
      </div>
    </React.Fragment>
  );
};

export const MovieCardBanner = ({ src }) => {
  const buttons = [
    { name: "Watch", key: "watch", icon: <FaPlay /> },
    { name: "Like", key: "like", icon: <BsFillHeartFill /> },
    { name: "Watch List", key: "watch-list", icon: <BsFillBookmarkFill /> },
    { name: "Share", key: "share", icon: <IoShareSocialSharp /> },
  ];

  return (
    <React.Fragment>
      <div className="h-full w-full relative">
        <img
          src={src}
          alt="banner"
          className="h-full w-full object-cover object-top"
        />

        <div className="absolute bottom-0 h-full w-full bg-custom-gradient z-1"></div>
        <div className="absolute bottom-0 left-0 h-full rounded-3xl z-2 flex flex-col justify-between px-8 py-8 w-[50%]">
          <div className="flex justify-start items-center">
            <Title
              icon="&#128293;"
              text="Phim xu hướng"
              className="text-md rounded-full bg-opacity-white-0.2 px-4 py-1 font-b700"
            />
          </div>
          <div className="flex flex-col gap-5">
            <ul className="flex gap-2 items-center text-md">
              <li className="bg-opacity-white-0.3 text-light px-3 rounded-full">
                Action
              </li>
              <li className="bg-opacity-white-0.3 text-light px-3 rounded-full">
                Adventure
              </li>
              <li className="bg-opacity-white-0.3 text-light px-3 rounded-full">
                Comedy
              </li>
            </ul>
            <div className="flex flex-col w-full gap-3">
              <div>
                <span className="text-xl32 font-b700 w-[500px] line-clamp-1">
                  Deadpool & Wolverines (2024)
                </span>
                <blockquote className="text-opacity-white-0.6 line-clamp-3 w-[450px] ">
                  {`Deadpool's peaceful existence comes crashing down when the Time
              Variance Authority recruits him to help safeguard the multiverse.`}
                </blockquote>
              </div>

              <ul className="text-opacity-white-0.6 flex fleex-row gap-2 text-md">
                <li>Phim lẻ</li>|<li>FHD</li>|<li>Vietsub</li>|<li>2h 17m</li>|
                <li>Full</li>
              </ul>
              <div className="flex gap-3 items-center text-md text-opacity-white-0.6">
                <span className="inline-flex items-end gap-1">
                  <img
                    src={imdb}
                    alt="imdb"
                    className="W-[25px] h-[25px] object-cover rounded-full"
                  />
                  <span className="font-bold">8.6</span>
                </span>
                <span className="inline-flex items-end gap-1">
                  <img
                    src={tmdb}
                    alt="tmdb"
                    className="W-[25px] h-[25px] object-cover rounded-full"
                  />
                  <span className="font-bold">7.3</span>
                </span>
                <div className="flex gap-1 text-md text-[orange]">
                  <div className="flex gap-[0.5remm] items-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p className="text-md font-b800 bg-[orange] text-dark rounded-full px-2 flex items-center">
                    4.7
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              {buttons.map((item, index) => (
                <button
                  key={index}
                  className={`px-5 rounded-full inline-flex items-center gap-2 h-[40px] border ${
                    item.key !== "watch"
                      ? "border-light bg-transparent text-light"
                      : "border-transparent bg-light text-dark"
                  } `}
                >
                  <span>{item.icon}</span>
                  {item.key === "watch" ? (
                    <span className="text-md">{item.name}</span>
                  ) : (
                    ""
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
