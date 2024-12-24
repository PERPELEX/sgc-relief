import React from "react";
import Image from "next/image";

const Contact = () => {
  const phoneNumber = "+923325900041";
  const message =
    "AoA, I would like to virtually adopt a child orphaned in GAZA.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div id="adopt" className="flex flex-col items-center p-4">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-6 px-16 md:px-20 text-black bg-white hover:bg-green-500 hover:text-white rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-200">
          <Image
            src="/adoption/w1.png"
            alt="WhatsApp Logo"
            width={60}
            height={60}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <div className="text-center md:text-left">
            <p className="text-xl md:text-3xl font-semibold">Contact Now</p>
            <p className="text-lg md:text-xl tracking-wide">+92 332 5900041</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Contact;
