"use client";

import { GenreType } from "@/schemas/IMovieDetailsSchema";
import { SimpleSort } from "../../sort/SimpleSort";
import { GenreSelect } from "../genre-select/GenreSelect";
import styles from "./MoviesFiltersClient.module.css";

type Props = {
  genres: GenreType[];
};

export const MoviesFiltersClient = ({ genres }: Props) => {
  return (
    <div className={styles.filters}>
      <div className={styles.container}>
        <GenreSelect genres={genres} />
        <SimpleSort />
      </div>
    </div>
  );
};
