import React from "react";
import { MovieCardBanner } from "./MovieCard";
import Slide from "./Slide";

const TrendingMovie = () => {
  return (
    <React.Fragment>
      <Slide>
        <MovieCardBanner
          src={
            "https://resizing.flixster.com/NoO1q75sRFFMjgKKwPgDJEQoBRM=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23093323_i_h10_ab.jpg"
          }
        />
        <MovieCardBanner
          src={
            "https://ecdn.game4v.com/g4v-content/uploads/2024/04/12203632/Deadpool-3-2-game4v-1712928991-32.jpg"
          }
        />
        <MovieCardBanner
          src={
            "https://hips.hearstapps.com/hmg-prod/images/ryan-reynolds-hugh-jackman-deadpool-and-wolverine-663a2fd2b2bab.jpg?crop=1xw:0.8438705529361338xh;center,top&resize=1200:*"
          }
        />
      </Slide>
    </React.Fragment>
  );
};

export default TrendingMovie;
