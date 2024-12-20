import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HelpCounter = () => {
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

  const CounterBox = ({ counter }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <div
        ref={ref}
        className="flex flex-col justify-center items-center text-black w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 "
      >
        {inView && (
          <CountUp
            start={0}
            end={counter.endValue}
            duration={counter.duration}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
          />
        )}
        <span className="mt-2 text-sm sm:text-base md:text-lg text-nowrap">
          {counter.label}
          <span className="text-sm font-mono"> / Month</span>
        </span>
      </div>
    );
  };

  return (
    <div className="bg-[#E6F7E6] h-[30vh] max-h-[300px] min-h-[250px] px-28 flex flex-col justify-center gap-10">
      <div className="flex flex-row justify-between items-center">
        {counters.map((counter) => (
          <CounterBox key={counter.id} counter={counter} />
        ))}
      </div>
    </div>
  );
};

export default HelpCounter;
