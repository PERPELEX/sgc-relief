import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Heading from "@/components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTshirt,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

export default function HelpCounter() {
  const counters = [
    {
      id: 1,
      endValue: 20000,
      label: "Meals Fed",
      duration: "5",
      icon: <FontAwesomeIcon icon={faUtensils} className="size-10" />,
    },
    {
      id: 2,
      endValue: 17600,
      label: "Clothes Donated",
      duration: "5",
      icon: <FontAwesomeIcon icon={faTshirt} className="size-10" />,
    },
    {
      id: 3,
      endValue: 4500,
      label: "Medically Assisted",
      duration: "5",
      icon: <FontAwesomeIcon icon={faMedkit} className="size-10" />,
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
        className="flex flex-row gap-8 justify-center items-center text-white rounded-2xl shadow-lg p-4"
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
          <span className="mt-2 text-sm sm:text-base md:text-lg text-center">
            {counter.label}
            <span className="text-xs sm:text-sm md:text-base font-mono">
              {" "}
              / Month
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[url('/a5.jpeg')] bg-cover bg-center h-[30vh] max-h-[500px] min-h-[450px] px-4 sm:px-8 md:px-16 lg:px-28 flex flex-col justify-center items-center gap-8 overflow-hidden">
      <Heading
        className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold"
        text="Our Efforts"
      />
      <div className="flex flex-wrap justify-between items-center sm:gap-10 w-full">
        {counters.map((counter) => (
          <CounterBox key={counter.id} counter={counter} />
        ))}
      </div>
    </div>
  );
}
