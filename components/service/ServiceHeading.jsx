import React from "react";

export default function ServiceHeading({ title, heading, text }) {
  return (
    <div className="bg-[#16A34A] flex flex-col justify-between items-center gap-10 py-40">
      <h2 className="text-6xl font-semibold">{title}</h2>
      <span className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold tracking-wide">{heading}</h3>
        <p className="text-xl font-light w-[80%] text-center">{text}</p>
      </span>
    </div>
  );
}
