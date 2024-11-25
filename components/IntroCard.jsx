import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroCard = () => {
    return (
        <div className="bg-[#0E493A] text-white min-h-screen flex items-center px-6 md:px-20 poppins-medium">
            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full relative">
                {/* Text Section */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="block text-5xl md:text-7xl">SGC Aid &</span>
                        Relief Activities
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                        Save Gaza relief activities aiding people in Palestine through a reliable source. You can help by donating or
                        directly connecting to families and helping them.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="">
                            <button className="text-lg md:text-xl font-bold bg-yellow-400 text-green-900 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:bg-black hover:text-white transition-all ease-in-out duration-200">
                                Donate Now
                            </button>
                        </Link>
                        <Link href="">
                            <button className="text-lg md:text-xl font-bold bg-transparent border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full text-white hover:bg-white hover:text-[#0E493A] transition-all ease-in-out duration-200">
                                Connect with a Family
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center mt-8 md:mt-0 md:justify-end">
                    <Image
                        src="/b5.png"
                        width={400}
                        height={400}
                        alt="Relief Activities"
                        className="md:w-[500px] lg:w-[700px] max-w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroCard;
