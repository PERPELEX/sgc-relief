import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import HeadingCard from "@/components/ground/HeadingCard";
import AllActivities from "@/components/ground/AllActivities";
import Collab from "@/components/ground/Collab";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100%] z-20">
      <HeadingCard />
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        <Collab />
        <AllActivities />
      </Wrapper>
    </main>
  );
}
