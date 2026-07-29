import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to Movies App</h1>

        <p className={styles.description}>
          Discover popular movies, genres and latest releases.
        </p>

        <Link className={styles.link} href="/movies">
          Browse movies
        </Link>
      </section>
    </main>
  );
}
