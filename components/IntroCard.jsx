import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroCard = () => {
    return (
        <div className="bg-[#0E493A] text-white min-h-screen flex items-center px-6 md:px-20">
            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                {/* Text Section */}
                <div className="max-w-lg ml-12">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-7xl">SGC Aid &</span> <br /> Relief Activities
                    </h1>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Save Gaza relief activities aiding people in palestine through a source I dont remeber but is reliable and if my
                        word matters then trust me. You can help by donating or directly connecting to families and helping them.
                    </p>
                    <div className="flex gap-4">
                        <Link href="">
                            <button className="text-xl font-bold bg-yellow-400 text-green-900 px-8 py-4 rounded-full shadow-lg hover:bg-black hover:text-white transition-all ease-in-out duration-200">
                                Donate Now
                            </button>
                        </Link>
                        <Link href="">
                            <button className="text-xl font-bold bg-transparent border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-[#0E493A] transition-all ease-in-out duration-200">
                                Connect with a Family
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="absolute -bottom-20 left-[50rem]">
                    <Image
                        src="/b5.png"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroCard;
