import { ResultType } from "@/schemas/ImovieSchema";
import styles from "./MoviesListCard.module.css";
import { GenreType } from "@/schemas/IMovieDetailsSchema";
import Link from "next/link";
import { PosterPreview } from "../poster-preview/PosterPreview";
import { StarsRating } from "../../../stars-rating/StarsRating";
import { MovieInfo } from "../../details/movie-info/MovieInfo";

type PropsType = {
  movie: ResultType;
  allGenres: GenreType[];
};

export const MoviesListCard = ({ movie, allGenres }: PropsType) => {
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: `/movies/${movie.id}`,
          query: { title: movie.title },
        }}
        aria-label={movie.title}
      >
        <PosterPreview posterPath={movie.poster_path} title={movie.title} />
      </Link>

      <div className={styles.infoBox}>
        <div className={styles.infoContent}>
          <StarsRating average={movie.vote_average} />

          <MovieInfo movie={movie} allGenres={allGenres} />
        </div>
      </div>
    </div>
  );
};
