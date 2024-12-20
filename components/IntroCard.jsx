import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroCard = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center poppins"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      {/* Content Section */}
      <div className="relative flex flex-col items-center md:items-start justify-center h-full text-white px-6 md:px-24">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block text-5xl md:text-7xl">SGC Aid &</span>
            Relief Activities
          </h1>
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
            Save Gaza relief activities aiding people in Palestine through a
            reliable source. You can help by donating or directly connecting to
            families and helping them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="">
              <button className="text-lg md:text-xl font-bold bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:bg-[#D0312D] hover:text-white transition-all ease-in-out duration-200">
                Donate Now
              </button>
            </Link>
            <Link href="">
              <button className="text-lg md:text-xl font-bold bg-transparent border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-white hover:bg-[#D0312D] hover:text-[#fff] hover:border-[#D0312D] transition-all ease-in-out duration-200">
                Connect with a Family
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
