import React from "react";
import TrendingMovie from "../components/TrendingMovie";
import { MovieCardVertical, MovieCardBanner } from "../components/MovieCard";
import RecommendedMovie from "../components/RecommendedMovie";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="grid grid-cols-6 grid-rows-12 gap-5 h-full w-full">
          <div className="col-span-6 row-span-6 rounded-3xl bg-opacity-white-0.2 h-full w-full">
            <TrendingMovie>
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
            </TrendingMovie>
          </div>
          <div className="col-span-6 row-span-6 rounded-3xl bg-opacity-white-0.2 w-full">
            <RecommendedMovie title="Phim đề xuất" type="Recommended Movie">
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
              <MovieCardVertical />
            </RecommendedMovie>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
