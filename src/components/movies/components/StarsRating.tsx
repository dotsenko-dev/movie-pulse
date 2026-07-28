type PropsType = {
  average: number;
};

export const StarsRating = ({ average }: PropsType) => {
  return (
    <div>
      <p>Rating: {average}</p>
    </div>
  );
};
