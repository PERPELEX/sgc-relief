import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import AidHeading from "@/components/directAid/AidHeading";
import Activities from "@/components/ground/Activity";
import { activitiesData } from "@/data/activitiesData";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100%] z-20">
      <AidHeading />
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        {activitiesData.map((data, index) => (
          <Activities key={index} data={data} left={index % 2 != 0} />
        ))}
      </Wrapper>
    </main>
  );
}
