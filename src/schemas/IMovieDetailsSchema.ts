import * as z from "zod";

export const IBelongsToCollectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable().optional(),
  backdrop_path: z.string().nullable().optional(),
});
export type BelongsToCollectionType = z.infer<
  typeof IBelongsToCollectionSchema
>;

export const IGenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export type GenreType = z.infer<typeof IGenreSchema>;

export const IProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable().optional(),
  name: z.string(),
  origin_country: z.string(),
});
export type ProductionCompanyType = z.infer<typeof IProductionCompanySchema>;

export const IProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});
export type ProductionCountryType = z.infer<typeof IProductionCountrySchema>;

export const ISpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});
export type SpokenLanguageType = z.infer<typeof ISpokenLanguageSchema>;

export const IMovieDetailsSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable().optional(),
  belongs_to_collection: IBelongsToCollectionSchema.nullable().optional(),
  budget: z.number(),
  genres: z.array(IGenreSchema),
  homepage: z.string().nullable().optional(),
  id: z.number(),
  imdb_id: z.string().nullable().optional(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable().optional(),
  production_companies: z.array(IProductionCompanySchema),
  production_countries: z.array(IProductionCountrySchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number().nullable().optional(),
  softcore: z.boolean().nullable().optional(),
  spoken_languages: z.array(ISpokenLanguageSchema),
  status: z.string(),
  tagline: z.string().nullable().optional(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type MovieDetailsType = z.infer<typeof IMovieDetailsSchema>;
