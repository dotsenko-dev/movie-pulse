import Image from "next/image";
import Link from "next/link";
import { accountService } from "@/api/services/account.service";
import styles from "./UserInfo.module.css";
import { API_CONSTANTS } from "@/constants/api-constants";

export const UserInfo = async () => {
  const account = await accountService.getAccount();

  const avatarPath = account.avatar.tmdb.avatar_path;

  return (
    <Link href="/account" className={styles.user}>
      {avatarPath ? (
        <Image
          src={`${API_CONSTANTS.IMAGE_BASE_URL}/w200${avatarPath}`}
          alt={account.username}
          width={40}
          height={40}
          className={styles.avatar}
        />
      ) : (
        <div className={styles.avatarPlaceholder}>
          {account.username[0].toUpperCase()}
        </div>
      )}

      <span>{account.username}</span>
    </Link>
  );
};
