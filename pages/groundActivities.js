import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import HeadingCard from "@/components/ground/HeadingCard";
import AllActivities from "@/components/ground/AllActivities";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100%] z-20">
      <HeadingCard />
      <AllActivities />
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20"></Wrapper>
    </main>
  );
}
