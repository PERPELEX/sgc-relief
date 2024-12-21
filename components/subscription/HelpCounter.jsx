import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTshirt,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

const HelpCounter = () => {
  const counters = [
    {
      id: 1,
      endValue: 20000,
      label: "Meals Fed",
      duration: "5",
      icon: (
        <FontAwesomeIcon icon={faUtensils} className="size-10 text-[#22C55E]" />
      ),
    },
    {
      id: 2,
      endValue: 17600,
      label: "Clothes Donated",
      duration: "5",
      icon: (
        <FontAwesomeIcon icon={faTshirt} className="size-10 text-[#22C55E]" />
      ),
    },
    {
      id: 3,
      endValue: 4500,
      label: "Medically Assisted",
      duration: "5",
      icon: (
        <FontAwesomeIcon icon={faMedkit} className="size-10 text-[#22C55E]" />
      ),
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
        className="flex flex-row gap-8 justify-center items-center text-black rounded-2xl  p-4"
      >
        {counter.icon}
        <div className="flex flex-col justify-center items-center">
          {inView && (
            <CountUp
              start={0}
              end={counter.endValue}
              duration={counter.duration}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            />
          )}
          <span className="mt-2 text-sm sm:text-base md:text-lg text-center  ">
            {counter.label}
            <span className="text-xs sm:text-sm md:text-base font-mono text-[#22C55E]">
              {" "}
              / Month
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="hidden  bg-[#E6F7E6] h-[30vh] max-h-[300px] min-h-[250px] px-28 md:flex flex-col justify-center gap-10">
      <div className="flex flex-row justify-between items-center">
        {counters.map((counter) => (
          <CounterBox key={counter.id} counter={counter} />
        ))}
      </div>
    </div>
  );
};

export default HelpCounter;
