import { ResultType } from "@/schemas/ImovieSchema";

type PropsType = {
  movie: ResultType;
};

export const MovieInfo = ({ movie }: PropsType) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release: {movie.release_date}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>
        {movie.overview
          ? `${movie.overview.slice(0, 100)}...`
          : "No description"}
      </p>
    </div>
  );
};
