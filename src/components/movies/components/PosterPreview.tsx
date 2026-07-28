import { API_CONSTANTS } from "@/constants/api-constants";

type PropsType = {
  posterPath: string | null | undefined;
  title: string;
};

export const PosterPreview = ({ posterPath, title }: PropsType) => {
  return (
    <div>
      <div>
        {posterPath ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={`${API_CONSTANTS.IMAGE_BASE_URL}/w200${posterPath}`}
            alt={title}
          />
        ) : (
          <div>No image</div>
        )}
      </div>
    </div>
  );
};
