import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <div className="flex flex-col md:flex-row justify-start  md:gap-20 bg-white rounded-2xl shadow-lg md:shadow-none md:bg-transparent">
      <div className="md:bg-white md:rounded-2xl md:shadow-lg p-8 flex items-center">
        <span className="w-full md:w-[40%] hover:scale-110 transition-all ease-in-out duration-200">
          <Link href="directAid">
            <div
              className="w-full h-64 md:w-80 md:h-80 rounded-2xl shadow-lg bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(/samplePic.jpg)` }}
            ></div>
          </Link>
        </span>
      </div>
      <div className="md:bg-white md:rounded-2xl md:shadow-lg px-8 md:px-16 py-8 md:py-12">
        <div className="w-auto flex flex-col justify-start items-start text-black relative -top-6">
          <h3 className="text-xl pb-8 md:text-3xl font-semibold md:bg-[#22C55E] md:text-white md:p-8 rounded-[2rem] md:relative md:-top-16">
            Gaza Direct Aid Portal
          </h3>
          <span className="flex flex-col gap-2">
            <p className="text- md:text-2xl font-semibold tracking-wider">
              Help Monetarily to Ensured Families
            </p>
            <p className="text-sm md:text-lg font-light">
              Make a real difference by directly connecting with and supporting
              Palestinian families in need. Your trusted donations will reach
              those who need it most, ensuring your generosity has a meaningful
              impact.
            </p>
          </span>
          <Link href="directAid">
            <button className="text-xs md:text-lg mt-6 py-3 px-4 rounded-3xl bg-[#22C55E] text-white hover:bg-[#D0312D] transition-all ease-in-out duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
