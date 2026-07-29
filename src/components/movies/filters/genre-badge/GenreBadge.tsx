import { GenreType } from "@/schemas/IMovieDetailsSchema";
import Link from "next/link";
import styles from "./GenreBadge.module.css";

type PropsType = {
  genre: GenreType;
};

export const GenreBadge = ({ genre }: PropsType) => {
  return (
    <Link href={`/movies?with_genres=${genre.id}`} className={styles.badge}>
      <span>{genre.name}</span>
    </Link>
  );
};
