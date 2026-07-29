import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Welcome to Movies App</h1>

        <p>Discover popular movies, genres and latest releases.</p>

        <Link href="/movies">Browse movies</Link>
      </section>
    </main>
  );
}
