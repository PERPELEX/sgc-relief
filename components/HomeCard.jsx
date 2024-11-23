import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeCard() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative h-[70vh] poppins-bold rounded-3xl shadow-lg flex flex-col justify-between bg-gradient-to-t from-[#0E493A] to-[#0f6751] bg-[#203D3B]">
            {/* Heading */}
            <div className="flex flex-col z-30">
                <h1 className="text-[5.5rem] tracking-wide py-10 text-center text-white">Gaza Direct Aid Portal</h1>
                <div className="flex flex-row justify-center items-center gap-x-[30rem]">
                    <span className="flex flex-row justify-center items-center gap-x-2 text-black">
                        <div className="w-10 h-10 rounded-[50%] bg-blue-200 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className=""><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>
                        </div>
                        <p className="text-white text-lg font-normal">Help Monetarily</p>
                    </span>
                    <span className="flex flex-row justify-center items-center gap-x-2 text-black">
                        <div className="w-10 h-10 rounded-[50%] bg-pink-200 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                        </div>
                        <p className="text-white text-lg font-normal">Ensured Families</p>
                    </span>
                </div>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                <Image src="/c2.png" alt="Card Image" width={2000} height={2000} className="w-[100%] h-[100%]" objectFit="cover" />
            </div>

            <div className="flex flex-row justify-between items-end px-16 py-12">
                <p className="w-[29%] text-base font-normal">
                    Make a real difference by directly connecting with and supporting Palestinian families in need. Your trusted donations will reach those who need it most, ensuring your generosity has a meaningful impact.
                </p>

                {/* button */}
                <Link href="">
                    <div
                        className="flex flex-row justify-between items-center gap-4 bg-black p-4 px-6 rounded-[4rem] shadow-xl hover:bg-white hover:text-black transition-all ease-in-out duration-200"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <p>Connect Now</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className={`size-6 ${isHovered ? 'animate-move-right' : ''}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}