import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import HeadingCard from "@/components/ground/HeadingCard";
import AllActivities from "@/components/ground/AllActivities";
import Collabrators from "@/components/ground/Collab";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100%] z-20">
      <HeadingCard />
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        <Collabrators />
        <AllActivities />
      </Wrapper>
    </main>
  );
}
