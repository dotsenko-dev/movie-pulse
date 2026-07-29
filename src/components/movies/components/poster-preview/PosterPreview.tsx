import { API_CONSTANTS } from "@/constants/api-constants";
import styles from "./PosterPreview.module.css";

type PropsType = {
  posterPath: string | null | undefined;
  title: string;
};

export const PosterPreview = ({ posterPath, title }: PropsType) => {
  return (
    <div className={styles.posterWrapper}>
      {posterPath ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          className={styles.poster}
          src={`${API_CONSTANTS.IMAGE_BASE_URL}/w500${posterPath}`}
          alt={title}
        />
      ) : (
        <div className={styles.noImage}>No image</div>
      )}
    </div>
  );
};
