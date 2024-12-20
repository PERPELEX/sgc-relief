import React from "react";
import DirectAidService from "@/components/archive/DirectAid";
import SubServices from "@/components/archive/SubServices";
import Heading from "@/components/Heading";

export default function Services() {
  return (
    <span>
      <Heading className="mb-8 text-[#1a1a1a]" text="Our Services" />
      <DirectAidService />
      <SubServices />
    </span>
  );
}
