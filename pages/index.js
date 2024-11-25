import { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import { useInView } from "react-hook-inview";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-hidden w-[100%] z-20">
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        <AboutUs />
        <Services />
      </Wrapper>
    </main>
  );
}
