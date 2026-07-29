import Link from "next/link";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/movies"}>Movies</Link>
        </li>
      </ul>
    </nav>
  );
};
