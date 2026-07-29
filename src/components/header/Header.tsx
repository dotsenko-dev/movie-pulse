import Link from "next/link";
import { Menu } from "../menu/Menu";
import styles from "./Header.module.css";
import { UserInfo } from "../user-info/UserInfo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Movies App</Link>
      </div>

      <Menu />
      <UserInfo />
    </header>
  );
};
