import { ResultType } from "@/schemas/ImovieSchema";
import Link from "next/link";
import { PosterPreview } from "./PosterPreview";
import { StarsRating } from "./StarsRating";
import { MovieInfo } from "../details/MovieInfo";

type PropsType = {
  movie: ResultType;
};

export const MoviesListCard = ({ movie }: PropsType) => {
  return (
    <div>
      <Link
        href={{
          pathname: `/movies/${movie.id}`,
          query: { title: movie.title },
        }}
      >
        <PosterPreview posterPath={movie.poster_path} title={movie.title} />
        <StarsRating average={movie.vote_average} />
        <MovieInfo movie={movie} />
      </Link>
    </div>
  );
};
