"use client";

import { GenreType } from "@/schemas/IMovieDetailsSchema";
import { SimpleSort } from "../sort/SimpleSort";
import { GenreSelect } from "./GenreSelect";
import { SearchForm } from "./SearchForm";

type Props = {
  genres: GenreType[];
};

export const MoviesFiltersClient = ({ genres }: Props) => {
  return (
    <div>
      <SearchForm />

      <div>
        <GenreSelect genres={genres} />
        <SimpleSort />
      </div>
    </div>
  );
};
