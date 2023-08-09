import { Dispatch, FC, SetStateAction, useState } from "react";

import { IReview } from "@/app/day/[id]/page";

// day, title 제거
interface ReviewCardProps extends IReview {
  currentReview: number;
  setCurrentReview: Dispatch<SetStateAction<number>>;
}
type TLanguage = "korean" | "english";

const ReviewCard: FC<ReviewCardProps> = ({
  sentences,
  currentReview,
  setCurrentReview,
}) => {
  const [language, setIsLanguage] = useState<TLanguage>("korean");

  const onClickLanguage = (_language: TLanguage) => () => {
    setIsLanguage(_language);
  };

  const onClickPrev = () => {
    if (currentReview <= 0) {
      setCurrentReview(sentences.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
    setIsLanguage("korean");
  };

  const onClickNext = () => {
    if (currentReview >= sentences.length - 1) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
    setIsLanguage("korean");
  };

  return (
    <div className="w-full">
      <div className="h-32">
        <div className="border-black border-2 px-4 py-2">
          {sentences[currentReview][language]}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={onClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={onClickLanguage("korean")}>KOR</button>
        <button onClick={onClickLanguage("english")}>ENG</button>
        <button onClick={onClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
