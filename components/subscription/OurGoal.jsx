import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl shadow-lg">
      {/* Images Section */}
      <div className="relative w-full left-6 md:w-1/2">
        <div className="absolute -top-28 left-0 w-80 h-80">
          <Image
            src="/samplePic.jpg"
            alt="Child 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="relative top-28 left-52 w-72 h-48">
          <Image
            src="/samplePic.jpg"
            alt="Child 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="absolute inset-0 w-40 h-40 border-4 border-[#22C55E] -z-10 top-8 left-8"></div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-[#22C55E] font-semibold text-sm uppercase mb-2">
          About Us
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Goal is to Help <br /> Gazans in Need
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At SGC, our mission is to provide essential support to the
          underprivileged communities in Gaza. We strive to make a positive
          impact through various initiatives aimed at improving the quality of
          life for those in need.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Provide hot
            meals to the hungry
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Distribute
            clothing to those in need
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Offer
            medical assistance to the sick
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Support
            families with financial aid
          </li>
        </ul>
        <button className="bg-[#22C55E] text-white px-6 py-3 rounded-md hover:bg-[#D0312D] transition-all ease-in-out duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;
