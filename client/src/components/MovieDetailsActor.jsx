import axios from "axios";
import React, { useEffect, useState } from "react";
import avatarActor from "../assets/images/avatar_actor.png";

const MovieDetailsActor = ({ actor }) => {
  const [infoActor, setInfoActor] = useState({});
  useEffect(() => {
    if (actor) {
      const fetchImageActor = async () => {
        const res = await axios.get(
          `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${actor}&limit=1`
        );

        if (res.data.pages[0].title === actor) {
          setInfoActor(res.data.pages[0]);
        }
      };
      fetchImageActor();
    }
    return () => {};
  }, [actor]);

  return (
    <React.Fragment>
      {actor ? (
        <li className="cursor-pointer flex flex-col gap-1 w-[70px]">
          <>
            <img
              src={
                infoActor?.thumbnail?.url
                  ? infoActor?.thumbnail?.url
                  : avatarActor
              }
              alt=""
              className="h-[50px] w-[50px] object-cover object-top rounded-full border-2"
            />
            <p className="font-bold text-xsm text-center line-clamp-2 w-[50px]">
              {actor}
            </p>
          </>
        </li>
      ) : (
        <div className="flex flex-col items-center px-1 gap-1 w-[70px]">
          <img
            src={avatarActor}
            className="h-[50px] w-[50px] object-cover object-top rounded-full border-2"
            alt="actor"
          />
          <p className="font-bold text-xsm text-center line-clamp-2">
            Đang cập nhật
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default MovieDetailsActor;
