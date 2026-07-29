import { movieService } from "@/api/services/movie.service";
import { PosterPreview } from "../../components/poster-preview/PosterPreview";
import { GenreList } from "../../filters/genre-list/GenreList";
import styles from "./MovieById.module.css";

type PropsType = {
  params: Promise<{ id: string }>;
};

export const MovieBiId = async ({ params }: PropsType) => {
  const { id } = await params;
  const movie = await movieService.getById(id);

  return (
    <div className={styles.movie}>
      <PosterPreview posterPath={movie.poster_path} title={movie.title} />

      <div className={styles.info}>
        <h1>{movie.title}</h1>
        {movie.tagline && <p>{movie.tagline}</p>}

        <GenreList genres={movie.genres} />

        <p>
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </p>
        <p>Runtime: {movie.runtime} min</p>
        <p>Release Date: {movie.release_date}</p>

        <h2>Overview</h2>
        <p>{movie.overview}</p>

        <div>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
        </div>
      </div>
    </div>
  );
};
