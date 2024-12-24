import Footer2 from "@/components/Footer2";
import Header3 from "@/components/Header3";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import Head from "next/head";
import { useState, useEffect, createContext, useContext } from "react";
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
      <Link
        href="https://wa.me/923074583567" // Replace with the actual WhatsApp number
        className="fixed bottom-4 right-1 rounded-full bg-white/[0.25] text-green-500 duration-200 hover:scale-110 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} />
      </Link>

      <Head>
        <link rel="icon" href="/save-gaza-logo.png" />
        <title>SGC Relief Activities</title>
      </Head>

      <Headroom>
        <Header3 />
      </Headroom>

      <Component {...pageProps} />

      <Footer2 />
    </>
  );
}
