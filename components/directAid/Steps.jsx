import React from "react";

const options = [
  {
    id: 1,
    description: "Open the Profile of Persom whom you want ot donate.",
    bgColor: "bg-[#22C55E]",
  },
  {
    id: 2,
    description: "Fill the Donation Form.",
    bgColor: "bg-[#22C55E]",
  },
  {
    id: 3,
    description:
      "We will contact you and connect you directly with the Gazan whom you want to donate.",
    bgColor: "bg-[#22C55E]",
  },
  {
    id: 4,
    description:
      "Yoy will receive identity proof and available information of the Gazan.",
    bgColor: "bg-[#22C55E]",
  },
];

const OptionsCard = ({ className }) => {
  return (
    <div className={`flex flex-col space-y-8 ${className}`}>
      {options.map((option) => (
        <div
          key={option.id}
          className={`relative flex flex-row justify-between items-center rounded-3xl ${option.bgColor}`}
        >
          <p className="text-xl px-10 font-semibold">{`0${option.id}`}</p>

          {/* Main Content */}
          <div className="flex-1 flex items-center space-x-4 pl-16 pr-6 py-4 bg-white rounded-3xl shadow-2xl min-h-28">
            {/* Description */}
            <div>
              <p className=" text-black">{option.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionsCard;
