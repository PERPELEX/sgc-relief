import React, { useState } from "react";
import Link from "next/link";

const SubscriptionHeading = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" h-[90vh] bg-cover bg-center poppins"
      style={{ backgroundImage: "url('/subscription/b1.png')" }}
    >
      {/* Content */}
      <div className=" flex flex-col items-center justify-center h-full text-white px-4 md:px-24">
        <h3 className="text-sm md:text-lg font-medium tracking-widest uppercase mb-2">
          SGC Monthly Subscription
        </h3>
        <hr className="w-48 md:w-72 border-t border-white mb-4" />
        <h1 className="w-full md:w-[50%] text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-center">
          Together, We Can Make a Difference
        </h1>
        <p className="text-sm md:text-base lg:text-lg mt-4 max-w-full md:max-w-2xl text-center">
          Join us in making a lasting impact by subscribing to our monthly
          donation service. Every contribution, no matter how small, adds up to
          create significant change and support for those in need.
        </p>
        {/* Button */}
        <Link href="/subscription#form">
          <button
            className={`mt-8 px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl rounded-full font-medium flex flex-row justify-center items-center gap-2 transition-all duration-200 ${
              isHovered ? "bg-red-500 text-white" : "bg-[#fff] text-black"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Subscribe</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionHeading;
