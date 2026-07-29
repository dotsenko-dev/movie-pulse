import { API_CONSTANTS } from "@/constants/api-constants";
import Image from "next/image";
import styles from "./PosterPreview.module.css";

type PropsType = {
  posterPath: string | null | undefined;
  title: string;
};

export const PosterPreview = ({ posterPath, title }: PropsType) => {
  return (
    <div className={styles.posterWrapper}>
      {posterPath ? (
        <Image
          src={`${API_CONSTANTS.IMAGE_BASE_URL}/w500${posterPath}`}
          alt={title}
          width={40}
          height={40}
          className={styles.poster}
        />
      ) : (
        <div className={styles.noImage}>No image</div>
      )}
    </div>
  );
};
