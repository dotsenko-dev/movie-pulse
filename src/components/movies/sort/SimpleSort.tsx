"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const SimpleSort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  if (query) {
    return null;
  }

  const currentSort = searchParams.get("sort_by") || "popularity.desc";
  const [field, direction] = currentSort.split(".");
  const isAsc = direction === "asc";

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedField = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sort_by", `${selectedField}.${direction}`);
    params.set("page", "1");
    router.push(`/movies?${params}`);
  };

  const handleToggleDirection = () => {
    const newDirection = isAsc ? "desc" : "asc";
    const params = new URLSearchParams(searchParams);
    params.set("sort_by", `${field}.${newDirection}`);
    params.set("page", "1");
    router.push(`/movies?${params}`);
  };

  return (
    <div>
      <label>Sort by: </label>
      <select id="sort" value={field} onChange={handleSelectChange}>
        <option value="popularity">Popular</option>
        <option value="vote_average">Rating</option>
        <option value="primary_release_date">Release Date</option>
      </select>

      {/* Окрема кнопка зі стрілкою праворуч */}
      <button type="button" onClick={handleToggleDirection}>
        {isAsc ? "\u2191" : "\u2193"}
      </button>
    </div>
  );
};
