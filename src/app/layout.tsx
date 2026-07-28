import { Menu } from "@/components/menu/Menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог фільмів",
  description: "Знайдіть найкращі фільми, жанри та новинки кіно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
