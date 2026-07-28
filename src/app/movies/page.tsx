import { MoviesList } from "@/components/movies/components/MoviesList";
import { MoviesFilters } from "@/components/movies/filters/MoviesFilters";
import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";

export const metadata: Metadata = {
  title: "All Movies",
  description: "Check out movies playing in theaters.",
};

type PropsType = {
  searchParams: Promise<SearchParams>;
};

const MoviesPage = async ({ searchParams }: PropsType) => {
  return (
    <div>
      <MoviesFilters />
      <MoviesList searchParams={searchParams} />
    </div>
  );
};

export default MoviesPage;
