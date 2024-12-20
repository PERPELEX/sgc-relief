import React from "react";
import Image from "next/image";

const AdoptionGoal = () => {
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
          Our Goal
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Goal is to Help <br /> Children in Need
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At SGC, our mission is to provide essential support to children living
          in war-torn Gaza. By virtually adopting a child, you can take on the
          responsibility of their living expenses, education, and healthcare.
          This program allows you to establish direct contact with the child and
          choose whom you wish to support, thereby making a profound and lasting
          impact on their life.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Cover
            living expenses for the child
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Provide
            educational support and resources
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Ensure
            access to healthcare services
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-[#22C55E] mr-2 font-bold">✓</span> Establish
            direct communication with the child
          </li>
        </ul>
        <button className="bg-[#22C55E] text-white px-6 py-3 rounded-md hover:bg-[#1da44e] transition-all ease-in-out duration-200">
          Adopt
        </button>
      </div>
    </div>
  );
};

export default AdoptionGoal;
