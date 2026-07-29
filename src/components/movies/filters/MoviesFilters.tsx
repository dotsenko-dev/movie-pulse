import { genreService } from "@/api/services/genre.service";
import { MoviesFiltersClient } from "./movies-filters-client/MoviesFiltersClient";

export const MoviesFilters = async () => {
  const genreData = await genreService.getGenres();
  const genres = genreData.genres || [];

  return <MoviesFiltersClient genres={genres} />;
};
