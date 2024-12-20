import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-start md:gap-20 bg-white rounded-2xl shadow-lg md:shadow-none md:bg-transparent">
      <div className="md:bg-white md:rounded-2xl md:shadow-lg p-8 flex items-center">
        <span className="w-full md:w-[40%] hover:scale-110 transition-all ease-in-out duration-200">
          <Link href="groundActivities">
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
            SGC OnGround Activities
          </h3>
          <span className="flex flex-col gap-2">
            <p className="text-sm md:text-2xl font-semibold tracking-wider">
              Supporting Gaza with Essential Services
            </p>
            <p className="text-sm md:text-lg font-light">
              SGC OnGround Activities in Gaza provide essential services to
              support the community. Our Food Camps, Cloth Drive, and Medical
              Camps ensure nourishment, warmth, and health. Join us in making a
              positive impact and bringing relief to Gaza.
            </p>
          </span>
          <Link href="groundActivities">
            <button className="text-xs md:text-lg mt-6 py-3 px-4 rounded-3xl bg-[#22C55E] text-white hover:bg-[#D0312D] transition-all ease-in-out duration-200">
              View Activities
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
