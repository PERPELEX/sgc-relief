import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const phoneNumber = "923325000418";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="flex flex-col items-center">
      <Link href={whatsappLink} passHref>
        <div className="flex items-center justify-center gap-8 p-6 px-20 text-black bg-white hover:bg-green-500 hover:text-white rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-200">
          <Image
            src="/adoption/w1.png"
            alt="WhatsApp Logo"
            width={80}
            height={80}
          />
          <div>
            <p className="text-3xl font-semibold">Contact Now</p>
            <p className="text-xl tracking-wide">{phoneNumber}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Contact;
