import { MoviesList } from "@/components/movies/components/movie-list/MoviesList";
import { MoviesFilters } from "@/components/movies/filters/MoviesFilters";
import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";
import styles from "./MoviesPage.module.css";

export const metadata: Metadata = {
  title: "All Movies",
  description: "Check out movies playing in theaters.",
};

type PropsType = {
  searchParams: Promise<SearchParams>;
};

const MoviesPage = async ({ searchParams }: PropsType) => {
  return (
    <div className={styles.page}>
      <MoviesFilters />
      <MoviesList searchParams={searchParams} />
    </div>
  );
};

export default MoviesPage;
