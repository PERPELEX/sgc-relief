import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroCard = () => {
  const phoneNumber = "+923325900041";
  const message = "I would like to donate to Gaza through SGC.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className=" h-[90vh] bg-cover bg-center poppins z-50 "
      style={{ backgroundImage: "url('/b1.png')" }}
    >
      {/* Content Section */}
      <div className="  flex flex-col items-center md:items-start justify-center h-full text-white px-6 md:px-24">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block text-5xl md:text-7xl">SGC Aid &</span>
            Relief Activities
          </h1>
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
            Save Gaza relief activities aiding people in Palestine through a
            reliable source. You can help by donating or directly connecting to
            families and helping them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href={whatsappLink} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button className="text-lg md:text-xl font-bold bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:bg-[#D0312D] hover:text-white transition-all ease-in-out duration-200">
                  Donate Now
                </button>
              </a>
            </Link>
            <Link href={whatsappLink} passHref>
              <button className="text-lg md:text-xl font-bold bg-transparent border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-white hover:bg-[#D0312D] hover:text-[#fff] hover:border-[#D0312D] transition-all ease-in-out duration-200">
                Connect with a Family
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
