import React from "react";
import Image from "next/image";

const AdoptionGoal = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 py-10 md:p-8 bg-white rounded-2xl shadow-lg">
      {/* Images Section */}
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <div className="relative w-64 h-64 md:-left-28 md:top-10 md:w-80 md:h-80">
          <Image
            src="/samplePic.jpg"
            alt="Child 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="relative -top-10 left-0 md:left-10 w-48 h-32 md:w-72 md:h-48">
          <Image
            src="/samplePic.jpg"
            alt="Child 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-lg"
          />
        </div>
        <div className="absolute inset-0 w-32 h-32 border-4 border-[#22C55E] -z-10 top-4 left-4 md:top-8 md:left-8"></div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 ">
        <h3 className="text-[#22C55E] font-semibold text-sm uppercase mb-2 text-center md:text-left">
          Our Goal
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Our Goal is to Help <br /> Children in Need
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left">
          At SGC, our mission is to provide essential support to children living
          in war-torn Gaza. By virtually adopting a child, you can take on the
          responsibility of their living expenses, education, and healthcare.
          This program allows you to establish direct contact with the child and
          choose whom you wish to support, thereby making a profound and lasting
          impact on their life.
        </p>
        <ul className="space-y-2 mb-6 text-start md:text-left">
          <li className="flex items-center justify-satrt md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Cover
            living expenses for the child
          </li>
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Provide
            educational support and resources
          </li>
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Ensure
            access to healthcare services
          </li>
          <li className="flex items-center justify-start md:justify-start text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Establish
            direct communication with the child
          </li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#22C55E] text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-[#1da44e] transition-all ease-in-out duration-200">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptionGoal;
