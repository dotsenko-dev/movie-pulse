import Image from "next/image";
import { accountService } from "@/api/services/account.service";
import styles from "./AccountInfo.module.css";
import { API_CONSTANTS } from "@/constants/api-constants";

export const AccountInfo = async () => {
  const account = await accountService.getAccount();

  const avatarPath = account.avatar.tmdb.avatar_path;

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        {avatarPath ? (
          <Image
            src={`${API_CONSTANTS.IMAGE_BASE_URL}/w300${avatarPath}`}
            alt={account.username}
            className={styles.avatar}
          />
        ) : (
          <div className={styles.placeholder}>
            {account.username[0].toUpperCase()}
          </div>
        )}

        <h1>{account.username}</h1>

        {account.name && (
          <p>
            Name: <b>{account.name}</b>
          </p>
        )}

        <p>
          ID: <b>{account.id}</b>
        </p>

        <p>
          Language: <b>{account.iso_639_1}</b>
        </p>

        <p>
          Country: <b>{account.iso_3166_1}</b>
        </p>

        <p>
          Adult content:
          <b> {account.include_adult ? " yes" : " no"}</b>
        </p>
      </div>
    </section>
  );
};
