import * as z from "zod";

export const IDatesSchema = z.object({
  maximum: z.string(),
  minimum: z.string(),
});
export type DatesType = z.infer<typeof IDatesSchema>;

export const IResultSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable().optional(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable().optional(),
  release_date: z.string(),
  softcore: z.boolean().nullable().optional(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type ResultType = z.infer<typeof IResultSchema>;

export const IMovieSchema = z.object({
  dates: IDatesSchema.optional(),
  page: z.number(),
  results: z.array(IResultSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
export type MovieType = z.infer<typeof IMovieSchema>;
