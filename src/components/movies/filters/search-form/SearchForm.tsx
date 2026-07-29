"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import styles from "./SearchForm.module.css";

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const search = searchParams.get("query") || "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    startTransition(() => {
      if (value.trim()) {
        router.push(`/movies?query=${encodeURIComponent(value)}&page=1`);
      } else {
        router.push("/movies");
      }
    });
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        defaultValue={search}
        key={search}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />

      {isPending && <span className={styles.loading}>Loading...</span>}
    </div>
  );
};
