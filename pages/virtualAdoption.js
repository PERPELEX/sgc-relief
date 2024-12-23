import Wrapper from "@/components/Wrapper";
import AdoptionHero from "@/components/adoption/AdoptionHero";
import AdoptionGoal from "@/components/adoption/AdoptionGoal";
import HowItWorks from "@/components/adoption/HowItWorks";
import Contact from "@/components/adoption/Contact";
import Form from "@/components/subscription/Form";
import { activitiesData } from "@/data/activitiesData";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100%] z-20">
      <AdoptionHero />
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        <AdoptionGoal />
        <HowItWorks />
        <Contact />
        {/* <Form /> */}
      </Wrapper>
    </main>
  );
}
