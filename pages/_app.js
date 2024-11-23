import Footer2 from '@/components/Footer2';
import Header3 from '@/components/Header3';
import IntroCard from '@/components/IntroCard';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import Headroom from "react-headroom";
import Chatbot from "@/components/Chatbot";

export const productInfo = createContext();

// using Context api to use functions in other files
export function MyContext() {
  return useContext(productInfo);
}

// App Function
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});

  // Page will remain same after reload
  useEffect(() => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [subTotal, setSubTotal] = useState(0);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Link
        href="https://wa.me/923074583567" // Replace with the actual WhatsApp number
        className="fixed bottom-4 right-1 rounded-full bg-white/[0.25] text-green-500 duration-200 hover:scale-110 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} />
      </Link>

      <Headroom>
        <Header3 />
      </Headroom>
      <IntroCard />

      <Component {...pageProps} />
      <Footer2 />
    </>
  );
}