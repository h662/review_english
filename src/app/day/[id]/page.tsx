"use client";

import { NextPage } from "next";
import { useParams } from "next/navigation";

import data from "@/data.json";
import { useEffect, useState } from "react";
import ReviewCard from "@/components/ReviewCard";

export interface IReview {
  day: number;
  title: string;
  sentences: {
    english: string;
    korean: string;
  }[];
}

const Day: NextPage = () => {
  const [review, setReview] = useState<IReview>();
  const [currentReview, setCurrentReview] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    if (typeof id !== "string") return;

    setReview(data[parseInt(id, 10) - 1]);
  }, [id]);

  useEffect(() => console.log(review), [review]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24 px-12">
      <div className="font-semibold mb-24">Day {id}</div>
      {review && (
        <ReviewCard
          day={review.day}
          title={review.title}
          sentences={review.sentences}
          currentReview={currentReview}
          setCurrentReview={setCurrentReview}
        />
      )}
    </main>
  );
};

export default Day;
