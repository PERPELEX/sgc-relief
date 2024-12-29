import React, { useState } from "react";
import Link from "next/link";

const AdoptionHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" h-[90vh] bg-cover bg-center poppins"
      style={{ backgroundImage: "url('/subscription/b1.png')" }}
    >
      {/* Content */}
      <div className=" flex flex-col items-center justify-center h-full text-white px-4 sm:px-8 md:px-16 lg:px-24">
        <h3 className="text-sm sm:text-lg font-medium tracking-widest uppercase mb-2">
          SGC Virtual Adoption
        </h3>
        <hr className="w-48 sm:w-72 border-t border-white mb-4" />
        <h1 className="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
          Together, We Can Make a Difference
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-4 max-w-full sm:max-w-lg md:max-w-2xl text-center">
          Join us in making a lasting impact by virtually adopting an orphan
          child. Your contribution will help bear the cost of their education,
          healthcare, and daily needs, ensuring they have a brighter future.
        </p>
        {/* Button */}
        <Link href="virtualAdoption#adopt">
          <button
            className={`mt-8 px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl rounded-full font-medium flex flex-row justify-center items-center gap-2 transition-all duration-200 ${
              isHovered ? "bg-red-500 text-white" : "bg-[#fff] text-black"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Adopt</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdoptionHero;
