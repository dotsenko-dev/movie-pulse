import { GenreType } from "@/schemas/IMovieDetailsSchema";
import { GenreBadge } from "../genre-badge/GenreBadge";
import styles from "./GenreList.module.css";

type PropsType = {
  genres: GenreType[];
};

export const GenreList = ({ genres }: PropsType) => {
  return (
    <div className={styles.list}>
      {genres.map((genre) => (
        <GenreBadge key={genre.id} genre={genre} />
      ))}
    </div>
  );
};
