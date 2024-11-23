import { useState, useEffect } from "react";
import FAQs from "@/components/FAQs";
import Wrapper from "@/components/Wrapper";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";
import HowYouCanHelp from "@/components/HowYouCanHelp";
import Reviews from "@/components/Reviews";
import ContactAndSubscribe from "@/components/ContactAndSubscribe";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  return (
    <main className="overflow-x-hidden w-screen z-20">
      <Wrapper className="bg-blue-50 pt-20">
        <HowYouCanHelp />
        <FAQs />
        <ContactAndSubscribe />
        <Reviews />
      </Wrapper>
    </main>
  );
}
