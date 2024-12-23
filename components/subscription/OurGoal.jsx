import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 py-10 md:p-8 bg-white rounded-2xl shadow-lg z-0">
      {/* Images Section */}
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <div className="relative w-64 h-64 md:-left-28 md:top-10 md:w-80 md:h-80 z-10">
          <Image
            src="/subscription/a3.jpg"
            alt="Child 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="relative -top-10 left-0 md:left-10 w-48 h-32 md:w-72 md:h-48 z-20 md:z-0 ">
          <Image
            src="/subscription/a2.jpg"
            alt="Child 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="absolute inset-0 w-32 h-32 border-4 border-[#22C55E] -z-10 top-4 left-4 md:top-8 md:left-8"></div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-[#22C55E] font-semibold text-sm uppercase mb-2 text-center md:text-left">
          Our Goal
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Our Goal is to Help <br /> Gazans in Need
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left">
          At SGC, our mission is to provide essential support to the
          underprivileged communities in Gaza. We strive to make a positive
          impact through various initiatives aimed at improving the quality of
          life for those in need.
        </p>
        <ul className="space-y-2 mb-6 text-start md:text-left">
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Provide hot
            meals to the hungry
          </li>
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Distribute
            clothing to those in need
          </li>
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Offer
            medical assistance to the sick
          </li>
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Support
            families with financial aid
          </li>
        </ul>
        {/* <div className="flex justify-center md:justify-start">
          <button className="bg-[#22C55E] text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-[#D0312D] transition-all ease-in-out duration-200">
            Learn More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsSection;
