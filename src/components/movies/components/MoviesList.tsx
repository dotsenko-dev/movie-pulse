import { movieService } from "@/api/services/movie.service";
import { createQueryObject } from "@/utils/ulr";
import { SearchParams } from "next/dist/server/request/search-params";
import { Pagination } from "../../pagination/Pagination";
import { MoviesListCard } from "./MoviesListCard";
import { redirect } from "next/navigation";

type PropsType = {
  searchParams: Promise<SearchParams>;
};

export const MoviesList = async ({ searchParams }: PropsType) => {
  const resolvedParams = await searchParams;
  const query = createQueryObject(resolvedParams);
  const pageParam = resolvedParams?.page;
  const parsedPage = typeof pageParam === "string" ? Number(pageParam) : 1;

  if (isNaN(parsedPage) || parsedPage < 1 || parsedPage > 500) {
    const params = new URLSearchParams(query);
    params.set("page", "1");
    redirect(`/movies?${params}`);
  }

  const data = await movieService.getAll({
    ...query,
    page: parsedPage.toString(),
  });

  const { results, page, total_pages } = data;

  return (
    <div>
      <Pagination
        apiPage={page}
        totalPages={total_pages}
        searchParams={searchParams}
      />

      {results.map((movie) => (
        <MoviesListCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
