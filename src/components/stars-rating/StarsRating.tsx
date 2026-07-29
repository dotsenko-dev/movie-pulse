import styles from "./StarsRating.module.css";

type PropsType = {
  average: number;
};

export const StarsRating = ({ average }: PropsType) => {
  return (
    <div className={styles.rating}>
      <p>Rating: {average}</p>
    </div>
  );
};
