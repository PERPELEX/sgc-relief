import React, { useState } from "react";
import Link from "next/link";

const HeadingCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" h-[90vh] bg-cover bg-center poppins"
      style={{ backgroundImage: "url('/ground/b1.png')" }}
    >
      {/* Content */}
      <div className=" flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h3 className="text-lg font-medium tracking-widest uppercase mb-2">
          SGC Relief Activities
        </h3>
        <hr className="w-72 border-t border-white mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          SGC OnGround Activities
        </h1>
        <p className="text-base md:text-lg mt-4 max-w-2xl">
          SGC OnGround Activities in Gaza provide essential services to support
          the community, including Food Camps, Cloth Drives, and Medical Camps.
          Join us in making a positive impact and bringing relief to Gaza.
        </p>
        {/* Button */}
        <Link href="/groundActivities#activity">
          <button
            className={`mt-8 px-6 py-3 text-xl rounded-full font-medium flex flex-row justify-center items-center gap-2 transition-all duration-200 ${
              isHovered ? "bg-red-500" : "bg-white text-black"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>View All</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`size-6  transition-transform duration-200 ${
                isHovered ? "animate-move-down" : ""
              }`}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeadingCard;
