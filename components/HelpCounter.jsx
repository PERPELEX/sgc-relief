// import React from 'react';
// import CountUp from 'react-countup';

// const SquareCounters = () => {
//   // Define the counters and their end values
//   const counters = [
//     { id: 1, endValue: 150, label: "Counter 1" },
//     { id: 2, endValue: 300, label: "Counter 2" },
//     { id: 3, endValue: 450, label: "Counter 3" },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center items-center gap-4 p-4">
//       {counters.map((counter) => (
//         <div
//           key={counter.id}
//           className="flex flex-col justify-center items-center bg-blue-500 text-white w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded shadow-lg"
//         >
//           <CountUp
//             start={0}
//             end={counter.endValue}
//             duration={2.5}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//           />
//           <span className="mt-2 text-sm sm:text-base md:text-lg">{counter.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SquareCounters;
