import { z } from "zod";

export const IAccountSchema = z
  .object({
    avatar: z
      .object({
        gravatar: z
          .object({
            hash: z.string(),
          })
          .strict(),
        tmdb: z
          .object({
            avatar_path: z.string().nullable(),
          })
          .strict(),
      })
      .strict(),
    id: z.number().int().nonnegative(),
    iso_639_1: z.string(),
    iso_3166_1: z.string(),
    name: z.string(),
    include_adult: z.boolean(),
    username: z.string(),
  })
  .strict();

export type AccountType = z.infer<typeof IAccountSchema>;
