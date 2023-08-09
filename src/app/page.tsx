import { NextPage } from "next";

import DayCard from "@/components/DayCard";
import data from "@/data.json";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24 px-12">
      <div className="font-semibold">Reviewing English</div>
      <ul className="mt-12 w-full grid grid-cols-4 gap-4">
        {data.map((_, i) => (
          <DayCard key={i} index={i} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
