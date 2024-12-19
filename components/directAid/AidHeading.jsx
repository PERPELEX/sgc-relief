import React from "react";
import Steps from "./Steps";

const AidPortal = () => {
  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center poppins flex flex-row items-center justify-between px-20"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Section */}
      <div className="relative w-[45%] text-white flex flex-col justify-center gap-4">
        <h1 className="w-[70%] text-3xl md:text-7xl font-bold tracking-wide">
          SGC Direct Aid Portal
        </h1>
        <p className="text-base md:text-xl max-w-3xl">
          A platform to connect <span className="font-semibold">verified</span>{" "}
          residents of Gaza with individuals and organizations worldwide. Your{" "}
          <span className="font-semibold">direct</span> donations ensure that
          aid reaches those who need it most, providing essential support and
          relief.
        </p>
        <div className="flex justify-start items-center gap-3">
          <div className="bg-white rounded-full p-2 pl-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user-check text-black size-8"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
          </div>
          <span className="font-medium">Identity Verified Profiles</span>
        </div>
      </div>

      {/* Semi-Circular Chart Section */}
      <Steps className="relative w-[45%]" />
    </div>
  );
};

export default AidPortal;
