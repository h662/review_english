import Link from "next/link";
import { FC } from "react";

interface DayCardProps {
  index: number;
}

const DayCard: FC<DayCardProps> = ({ index }) => {
  return (
    <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-500">
      <Link href={`/day/${index + 1}`}>
        <button>Day 1</button>
      </Link>
    </li>
  );
};

export default DayCard;