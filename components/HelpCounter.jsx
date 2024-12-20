import React from "react";
import CounterBox from "@/components/CounterBox";
import Heading from "@/components/Heading";

export default function HelpCounter() {
  const counters = [
    { id: 1, endValue: 20000, label: "Meals Fed", duration: "5" },
    { id: 2, endValue: 17600, label: "Clothes Donated", duration: "5" },
    {
      id: 3,
      endValue: 4500,
      label: "People Medically Assisted",
      duration: "5",
    },
  ];

  return (
    <div className="bg-[url('/a5.jpeg')] bg-cover bg-center h-[30vh] max-h-[500px] min-h-[450px] px-4 sm:px-8 md:px-16 lg:px-28 flex flex-col justify-center items-center gap-8 overflow-hidden">
      <Heading
        className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        text="Our Efforts"
      />
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 w-full">
        {counters.map((counter) => (
          <div className="flex flex-col items-center gap-2" key={counter.id}>
            <CounterBox counter={counter} />
          </div>
        ))}
      </div>
    </div>
  );
}
