import { Dispatch, FC, SetStateAction, useState } from "react";

import { TReview } from "@/app/day/[id]/page";
import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import axios from "axios";
import Speaker from "@/app/icons/Speaker";

type ReviewCardProps = Pick<TReview, "sentences"> & {
  currentReview: number;
  setCurrentReview: Dispatch<SetStateAction<number>>;
};
type TLanguage = "korean" | "english";

const ReviewCard: FC<ReviewCardProps> = ({
  sentences,
  currentReview,
  setCurrentReview,
}) => {
  const [language, setIsLanguage] = useState<TLanguage>("korean");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickLanguage = () => {
    if (language === "korean") {
      setIsLanguage("english");
    } else {
      setIsLanguage("korean");
    }
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

  const onClickListen = async () => {
    try {
      if (isLoading) return;

      setIsLoading(true);

      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api`, {
        text: sentences[currentReview].english,
      });

      const binaryData = atob(response.data.audioContent);

      const byteArray = new Uint8Array(binaryData.length);

      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([byteArray.buffer], { type: "audio/mp3" });

      const newAudio = new Audio(URL.createObjectURL(blob));

      document.body.appendChild(newAudio);
      newAudio.play();

      setTimeout(() => setIsLoading(false), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <div className="h-60">
        <div className="border-black border-2 px-4 py-2">
          {sentences[currentReview][language]}
        </div>
        <div className="mt-2">
          <button onClick={onClickListen} className="btn-style">
            <Speaker />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={onClickPrev} className="btn-style">
          <LeftArrow />
        </button>
        <button onClick={onClickLanguage} className="btn-style">
          <span className={`${language === "korean" && "font-semibold"} mr-1`}>
            KOR
          </span>
          /
          <span className={`${language === "english" && "font-semibold"} ml-1`}>
            ENG
          </span>
        </button>
        <button onClick={onClickNext} className="btn-style">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
