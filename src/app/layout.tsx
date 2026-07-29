import { Header } from "@/components/header/Header";
import { SearchForm } from "@/components/movies/filters/search-form/SearchForm";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movies App",
  description:
    "Movies App — каталог фільмів з рейтингами, жанрами та інформацією про кіно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header className="stickyTop">
          <Header />

          <Suspense>
            <SearchForm />
          </Suspense>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
