import { MovieBiId } from "@/components/movies/details/movie-byId/MovieBiId";
import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";

type PropsType = {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
};

export const generateMetadata = async ({
  searchParams,
}: PropsType): Promise<Metadata> => {
  const { title } = await searchParams;

  return { title: title ? String(title) : "One Movie" };
};

const MovieBiIdPage = async ({ params }: PropsType) => {
  return (
    <div>
      <MovieBiId params={params} />
    </div>
  );
};

export default MovieBiIdPage;
