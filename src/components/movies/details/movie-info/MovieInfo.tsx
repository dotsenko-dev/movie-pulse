import { GenreType } from "@/schemas/IMovieDetailsSchema";
import { ResultType } from "@/schemas/ImovieSchema";
import { GenreList } from "../../filters/genre-list/GenreList";
import styles from "./MovieInfo.module.css";

type PropsType = {
  movie: ResultType;
  allGenres: GenreType[];
};

export const MovieInfo = ({ movie, allGenres }: PropsType) => {
  const movieGenres = allGenres.filter((genre) =>
    movie.genre_ids?.includes(genre.id),
  );

  return (
    <div className={styles.info}>
      <h3>{movie.title}</h3>
      <div className={styles.genresContainer}>
        <GenreList genres={movieGenres} />
      </div>
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
