import React, { useState } from "react";

const AdoptionHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[90vh] bg-cover bg-center poppins"
      style={{ backgroundImage: "url('/subscription/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white px-24">
        <h3 className="text-lg font-medium tracking-widest uppercase mb-2">
          SGC Virtual Adoption
        </h3>
        <hr className="w-72 border-t border-white mb-4" />
        <h1 className="w-[50%] text-4xl md:text-6xl font-bold leading-tight">
          Together, We Can Make a Difference
        </h1>
        <p className="text-base md:text-lg mt-4 max-w-2xl">
          Join us in making a lasting impact by virtually adopting an orphan
          child. Your contribution will help bear the cost of their education,
          healthcare, and daily needs, ensuring they have a brighter future.
        </p>
        {/* Button */}
        <button
          className={`mt-8 px-8 py-3 text-xl rounded-full font-medium flex flex-row justify-center items-center gap-2 transition-all duration-200 ${
            isHovered ? "bg-red-500 text-white" : "bg-[#fff] text-black"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>Adopt</p>
        </button>
      </div>
    </div>
  );
};

export default AdoptionHero;
