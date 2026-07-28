import { unstable_cache } from "next/cache";
import { axiosInstance } from "../instance";
import { API_ENDPOINT } from "@/constants/api-endpoints";

export const genreService = {
  getAll: unstable_cache(
    async () => {
      const response = await axiosInstance.get(API_ENDPOINT.GENRES_MOVIE);
      return response.data;
    },
    ["genres"],
    { revalidate: 86400 },
  ),
};
