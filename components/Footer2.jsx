import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-[#111] text-white py-12">
      {/* Desktop Footer Content */}
      <div className="hidden md:grid container mx-auto  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-10 pb-12 border-b border-gray-700 px-4 lg:px-12">
        {/* Contact Info */}
        <div className="flex items-start">
          <i className="fa-solid fa-location-dot text-2xl lg:text-3xl text-[#206e3d] mr-4"></i>
          <div>
            <Link
              href={"https://maps.app.goo.gl/3XPDYJXN1Bn9kXQn8"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-[#2b9150] font-bold mb-3">Find us</h3>
              <p className="text-gray-400">
                SGC Office S#23, 3rd Floor, Malikabad Centre near 6th Rd, Murree
                Rd, Rawalpindi
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-start">
          <i className="fa-solid fa-phone text-2xl lg:text-3xl text-[#2b9150] mr-4"></i>
          <div>
            <h3 className="text-[#2b9150] font-bold mb-3">Call us</h3>
            <p className="text-gray-400">++92 332 5900041</p>
          </div>
        </div>
        <div className="flex items-start">
          <i className="fa-solid fa-envelope-open text-2xl lg:text-3xl text-[#2b9150] mr-4"></i>
          <div>
            <h3 className="text-[#2b9150] font-bold mb-3">Mail us</h3>
            <p className="text-gray-400">tameer2k23@gmail.com</p>
          </div>
        </div>

        {/* Logo and Social Links */}
        <div className="lg:col-span-1">
          <h1 className="text-xl lg:text-2xl font-bold mb-3 flex items-center">
            <Image
              src="/save-gaza-logo.png"
              width={32}
              height={32}
              className="w-8 mr-4"
              alt="Logo"
            />
            <span className="text-[#2b9150]">Save Gaza Campaign</span>
          </h1>
          <p className="text-gray-400 mb-5">Stand for Gaza & Unite for Gaza</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[#2b9150] font-bold mb-3">Useful Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-[#2b9150] font-bold mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-3">
            Don’t miss to subscribe to our new feeds. Kindly fill the form
            below.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded-t sm:rounded-l sm:rounded-t-none bg-gray-700 text-white focus:outline-none"
            />
            <button className="bg-[#2b9150] p-2 rounded-b sm:rounded-r sm:rounded-b-none hover:bg-[#650108] transition-colors duration-200 ease-in-out">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center py-6 px-4 hidden md:block">
        <p className="text-gray-400 mb-4">
          Copyright © 2024. All Rights Reserved{" "}
          <span className="text-[#2b9150]">Save Gaza Campaign</span>
        </p>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="block md:hidden bg-[#111] border-t border-gray-700 fixed bottom-0 left-0 right-0">
        <div className="flex justify-around py-3">
          <Link
            href="/"
            className="text-gray-400 hover:text-[#2b9150] text-xl flex flex-col justify-center items-center gap-2"
          >
            <i className="fa-solid fa-house-user"></i>
            <span className="block text-sm">Home</span>
          </Link>
          <Link
            href="/virtualAdoption"
            className="text-gray-400 hover:text-[#2b9150] text-xl flex flex-col justify-center items-center gap-2"
          >
            <i className="fa-solid fa-child"></i>
            <span className="block text-sm">Adoption</span>
          </Link>
          <Link
            href="/groundActivities"
            className="text-gray-400 hover:text-[#2b9150] text-xl flex flex-col justify-center items-center gap-2"
          >
            <i className="fa-solid fa-hands-helping"></i>
            <span className="block text-sm">Activities</span>
          </Link>
          <Link
            href="/subscription"
            className="text-gray-400 hover:text-[#2b9150] text-xl flex flex-col justify-center items-center gap-2"
          >
            <i className="fa-solid fa-calendar"></i>
            <span className="block text-sm">Subscription</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
