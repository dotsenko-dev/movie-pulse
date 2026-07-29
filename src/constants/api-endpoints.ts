export const API_ENDPOINT = {
  MOVIE_DETAILS: (id: number | string) => `/movie/${id}`,
  MOVIES_ALL: "/discover/movie",
  MOVIES_SEARCH: "/search/movie",
  GENRES_MOVIE: "/genre/movie/list",
  ACCOUNT: "/account/23497846",
} as const;
