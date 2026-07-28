import { GenreType } from "@/schemas/IMovieDetailsSchema";
import Link from "next/link";

type PropsType = {
  genre: GenreType;
};

export const GenreBadge = ({ genre }: PropsType) => {
  return (
    <Link href={`/movies?with_genres=${genre.id}`}>
      <span>{genre.name}</span>
    </Link>
  );
};
