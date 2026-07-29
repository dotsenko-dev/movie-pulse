import { API_ENDPOINT } from "@/constants/api-endpoints";
import { axiosInstance } from "../instance";
import { IMovieSchema, MovieType } from "@/schemas/ImovieSchema";
import {
  IMovieDetailsSchema,
  MovieDetailsType,
} from "@/schemas/IMovieDetailsSchema";

export const movieService = {
  getById: async (id: number | string): Promise<MovieDetailsType> => {
    const response = await axiosInstance.get(API_ENDPOINT.MOVIE_DETAILS(id));

    return IMovieDetailsSchema.parse(response.data);
  },

  getMoovies: async (query?: Record<string, string>): Promise<MovieType> => {
    const endpoint = query?.query
      ? API_ENDPOINT.MOVIES_SEARCH
      : API_ENDPOINT.MOVIES_ALL;
    const response = await axiosInstance.get<MovieType>(endpoint, {
      params: query,
    });

    return IMovieSchema.parse(response.data);
  },
};
