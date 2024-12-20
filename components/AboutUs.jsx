import React, { useState } from "react";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-12 bg-blue-50">
      <Heading
        className="mb-10 text-[#1a1a1a] text-5xl font-extrabold text-center"
        text="About Us"
      />

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-7xl mx-auto px-6 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-[57%] w-full bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="h-48 bg-[#22C55E] flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">Save Gaza Campaign</h3>
          </div>
          <div className="p-8">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              <span className="font-semibold text-[#22C55E]">Save Gaza Campaign</span> is a movement of hope and resilience, uniting voices for justice and compassion. Since our inception in November 2023, we strive to uplift the oppressed and foster solidarity among communities, ensuring that every individual feels valued and heard.
            </p>

            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-800">
                Join Us in Making a Difference!
              </p>

              <Link href="">
                <div
                  className="flex items-center gap-4 px-6 py-3 bg-[#22C55E] text-white rounded-full font-semibold shadow-md hover:bg-[#D0312D] transition duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <p>Join Now</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className={`w-6 h-6 ${isHovered ? "animate-move-right" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[41%] w-full bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="h-48 bg-[#22C55E] flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">SGC Relief Activities</h3>
          </div>
          <div className="p-8">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              <span className="font-semibold text-[#22C55E]">SGC Relief Activities</span> deals with all donations and relief efforts for the people of Palestine. Our goal is to help the people in need in any way possible, donating clothes, food, medicine, and money.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Together with our partner <span className="font-semibold text-[#22C55E]">Shaib Abi Talib</span>, we aim to make a significant difference.
            </p>

            <div className="flex justify-between items-center mt-8">
              <p className="text-xl font-semibold text-gray-800">
                Check out our Services!
              </p>

              <Link href="">
                <div
                  className="px-6 py-3 bg-[#22C55E] text-white rounded-full font-semibold shadow-md hover:bg-[#D0312D] transition duration-300"
                >
                  Services
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
