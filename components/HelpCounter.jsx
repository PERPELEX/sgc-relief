import React from "react";
import CounterBox from "@/components/CounterBox";
import Heading from "@/components/Heading";

export default function HelpCounter() {

  const counters = [
    { id: 1, endValue: 20000, label: "Meals Fed", duration: "5" },
    { id: 2, endValue: 17600, label: "Clothes Donated", duration: "5" },
    { id: 3, endValue: 4500, label: "People Medically Assisted", duration: "5" },
  ];

  return (
    <div className="bg-[url('/a5.jpeg')] bg-cover bg-center h-[30vh] max-h-[500px] min-h-[450px] px-28 flex flex-col justify-center gap-10 ">
      <Heading className="text-white" text="Our Efforts" />
      <div className="flex flex-row justify-between items-center">
        {counters.map(counter => (<CounterBox key={counter.id} counter={counter} />))}
      </div>
    </div>
  );
}