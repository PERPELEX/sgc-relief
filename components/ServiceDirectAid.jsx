import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <div className={`flex flex-row justify-start gap-20`}>
      <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center">
        <span className="-[40%] hover:scale-110 transition-all ease-in-out duration-200">
          <Link href="directAid">
            <div
              className="w-80 h-80 rounded-2xl shadow-lg bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(/samplePic.jpg)` }}
            ></div>
          </Link>
        </span>
      </div>
      <div className="bg-white rounded-2xl shadow-lg px-16 py-12">
        <div className="w-auto flex flex-col justify-start items-start  text-black relative -top-6">
          <h3 className=" text-3xl font-semibold bg-[#22C55E] text-white p-8 rounded-[2rem] relative -top-16">
            Gaza Direct Aid Portal
          </h3>
          <span className=" flex flex-col gap-2">
            <p className="text-2xl font-semibold tracking-wider">
              Help Monetarily to Ensured Families
            </p>
            <p className="text-lg font-light">
              Make a real difference by directly connecting with and supporting
              Palestinian families in need. Your trusted donations will reach
              those who need it most, ensuring your generosity has a meaningful
              impact.
            </p>
          </span>
          <Link href="directAid">
            <button className="text-lg mt-6 p-3 px-8 rounded-3xl bg-[#22C55E] text-white  hover:bg-[#D0312D] transition-all ease-in-out duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
