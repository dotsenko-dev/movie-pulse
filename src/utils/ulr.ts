import { SearchParams } from "next/dist/server/request/search-params";

export const createQueryObject = (
  resolvedParams?: SearchParams,
): Record<string, string> => {
  return resolvedParams
    ? Object.entries(resolvedParams).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          if (key !== "page" && typeof value === "string") {
            acc[key] = value;
          }
          return acc;
        },
        {},
      )
    : {};
};

export const createQueryString = (resolvedParams?: SearchParams): string => {
  const queryObj = createQueryObject(resolvedParams);
  return new URLSearchParams(queryObj).toString();
};
