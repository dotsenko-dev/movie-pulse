"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState(searchParams.get("query") || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    startTransition(() => {
      if (value.trim()) {
        router.push(`/movies?query=${encodeURIComponent(value)}&page=1`);
      } else {
        router.push(`/movies`);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      {isPending && <span>Loading...</span>}
    </div>
  );
};
