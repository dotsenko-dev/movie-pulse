import { GenreType } from "@/schemas/IMovieDetailsSchema";
import { GenreBadge } from "./GenreBadge";

type PropsType = {
  genres: GenreType[];
};

export const GenreList = ({ genres }: PropsType) => {
  return (
    <div>
      {genres.map((genre) => (
        <GenreBadge key={genre.id} genre={genre} />
      ))}
    </div>
  );
};
