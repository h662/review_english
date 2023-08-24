import Link from "next/link";
import { FC } from "react";

interface DayCardProps {
  day: number;
}

const DayCard: FC<DayCardProps> = ({ day }) => {
  return (
    <Link href={`/day/${day}`}>
      <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
        Day {day}
      </li>
    </Link>
  );
};

export default DayCard;
