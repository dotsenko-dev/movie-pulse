import { API_ENDPOINT } from "@/constants/api-endpoints";
import {
  GenresResponseType,
  IGenresResponseSchema,
} from "@/schemas/IMovieDetailsSchema";
import { unstable_cache } from "next/cache";
import { axiosInstance } from "../instance";

export const genreService = {
  getAll: unstable_cache(
    async (): Promise<GenresResponseType> => {
      const response = await axiosInstance.get<GenresResponseType>(
        API_ENDPOINT.GENRES_MOVIE,
      );
      return IGenresResponseSchema.parse(response.data);
    },
    ["genres"],
    { revalidate: 86400 },
  ),
};
