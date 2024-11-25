import React from "react"
import DirectAidService from "@/components/DirectAid"
import SubServices from "@/components/SubServices"

export default function Services() {
    return (
        <span>
            <div className="flex flex-row justify-center items-center gap-6 mb-8">
                <div className="w-20 h-3 bg-green-700 rounded-[2px] shadow-2xl "></div>
                <h2 className="text-center text-5xl text-[#1a1a1a] font-bold tracking-wider drop-shadow-2xl">Our Services</h2>
                <div className="w-20 h-3 bg-green-700 rounded-[2px] shadow-2xl "></div>
            </div>
            <DirectAidService />
            <SubServices />
        </span>
    )
}
