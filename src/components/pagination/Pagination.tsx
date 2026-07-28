import { API_CONSTANTS } from "@/constants/api-constants";
import { createQueryString } from "@/utils/ulr";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";

type PropsType = {
  apiPage: number;
  totalPages: number;
  searchParams?: Promise<SearchParams>;
};

export const Pagination = async ({
  apiPage,
  totalPages,
  searchParams,
}: PropsType) => {
  const resolvedParams = await searchParams;
  const query = createQueryString(resolvedParams);
  const maxAllowedPages = Math.min(totalPages, Number(API_CONSTANTS.MAX_PAGES));

  const prevPage = apiPage - 1;
  const nextPage = apiPage + 1;

  const isPrevDisabled = apiPage <= 1;
  const isNextDisabled = apiPage >= maxAllowedPages;

  const getPageHref = (p: number) => {
    const targetPage = p > Number(API_CONSTANTS.MAX_PAGES) || p < 1 ? 1 : p;
    return query
      ? `/movies?${query}&page=${targetPage}`
      : `/movies?page=${targetPage}`;
  };

  return (
    <div>
      {isPrevDisabled ? (
        <span>Prev</span>
      ) : (
        <Link href={getPageHref(prevPage)}>Prev</Link>
      )}

      <span>
        Page {apiPage} of {maxAllowedPages}
      </span>

      {isNextDisabled ? (
        <span>Next</span>
      ) : (
        <Link href={getPageHref(nextPage)}>Next</Link>
      )}
    </div>
  );
};
