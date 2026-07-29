"use client";

import { GenreType } from "@/schemas/IMovieDetailsSchema";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./GenreSelect.module.css";

type PropsType = {
  genres: GenreType[];
};

export const GenreSelect = ({ genres }: PropsType) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  if (query) {
    return null;
  }

  const currentGenre = searchParams.get("with_genres") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genreId = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (genreId) {
      params.set("with_genres", genreId);
    } else {
      params.delete("with_genres");
    }

    params.set("page", "1");
    router.push(`/movies?${params.toString()}`);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Genre: </label>
      <select
        value={currentGenre}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="">All genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};
