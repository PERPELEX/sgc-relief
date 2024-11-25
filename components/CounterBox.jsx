import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterBox = ({counter}) => {
  // Define the counters and their end values

  const { ref, inView } = useInView({
    triggerOnce: true, // Run once when it becomes visible
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  console.log(counter)

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center text-white w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-2xl shadow-lg"
    >
      {inView && (
        <CountUp
          start={0}
          end={counter.endValue}
          duration={counter.duration}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[6.5rem] font-bold"
        />
      )}
      <span className="mt-2 text-sm sm:text-base md:text-2xl text-nowrap">{counter.label}<span className="text-sm font-mono"> / Month</span></span>
    </div>
  );
};

export default CounterBox;