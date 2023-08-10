"use client";

import { NextPage } from "next";
import { useParams } from "next/navigation";

import data from "@/data.json";
import { useEffect, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";

export type TReview = {
  day: number;
  title: string;
  sentences: {
    english: string;
    korean: string;
  }[];
};

const Day: NextPage = () => {
  const [review, setReview] = useState<TReview>();
  const [currentReview, setCurrentReview] = useState<number>(0);

  const { id } = useParams();

  useEffect(() => {
    if (typeof id !== "string") return;

    setReview(data[parseInt(id, 10) - 1]);
  }, [id]);

  useEffect(() => console.log(review), [review]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24 px-12">
      <div className="w-full relative flex justify-center">
        <div className="absolute top-0 left-0">
          <Link href="/">
            <button className="btn-style text-xs font-semibold">Back</button>
          </Link>
        </div>
        <div className="font-semibold mb-24 mt-2">Day {id}</div>
      </div>
      {review && (
        <ReviewCard
          sentences={review.sentences}
          currentReview={currentReview}
          setCurrentReview={setCurrentReview}
        />
      )}
    </main>
  );
};

export default Day;
