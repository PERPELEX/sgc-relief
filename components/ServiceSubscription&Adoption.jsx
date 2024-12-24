import React from "react";
import Link from "next/link";

export default function ServiceSubscriptionAdoption() {
  return (
    <div className="flex flex-col gap-12 lg:p-8">
      {/* Service Block 1 */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Image */}
        <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-8 flex items-center w-full lg:w-auto">
          <div
            className="w-full h-[400px] lg:w-[260px] lg:h-[260px] rounded-2xl shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(/water.jpg)` }}
          ></div>
        </div>
        {/* Text Box */}
        <div className="bg-white rounded-2xl shadow-lg px-6 py-8 lg:px-16 lg:py-12 w-full">
          <div className="flex flex-col justify-center items-start gap-4 text-black">
            <h3 className="text-xl lg:text-3xl font-semibold">
              SGC Monthly Subscription
            </h3>
            <span className="flex flex-col gap-2">
              <p className="text-lg font-semibold tracking-wider">
                Support Gaza with a Monthly Contribution
              </p>
              <p className="text-sm lg:text-base font-light">
                Join the SGC Monthly Subscription program to provide continuous
                support to the people of Gaza. Your monthly contributions will
                help fund essential services and relief efforts, ensuring
                sustained aid and support for those in need.
              </p>
            </span>
            <Link href="subscription">
              <button className="p-2 lg:p-3 py-3 px-4 text-xs md:text-base lg:text-lg lg:px-6 rounded-3xl bg-[#22C55E] text-white hover:bg-[#D0312D] transition-all ease-in-out duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Service Block 2 */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Text Box */}
        <div className="bg-white rounded-2xl shadow-lg px-6 py-8 lg:px-16 lg:py-12 w-full">
          <div className="flex flex-col justify-center items-start gap-4 text-black">
            <h3 className="text-xl lg:text-3xl font-semibold">
              SGC Virtual Adoption
            </h3>
            <span className="flex flex-col gap-2">
              <p className="text-lg font-semibold tracking-wider">
                Virtually Adopt a Child in Gaza
              </p>
              <p className="text-sm lg:text-base font-light">
                Through SGC Virtual Adoption, you can provide for a child&apos;s
                needs in Gaza. Your support will cover essentials such as food,
                clothing, and education, making a significant impact on their
                life and future.
              </p>
            </span>
            <Link href="virtualAdoption">
              <button className="p-2 lg:p-3 py-3 px-4 text-xs md:text-base lg:text-lg lg:px-6 rounded-3xl bg-[#22C55E] text-white hover:bg-[#D0312D] transition-all ease-in-out duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-8 flex items-center w-full lg:w-auto">
          <div
            className="w-full h-[400px] lg:w-[260px] lg:h-[260px] rounded-2xl shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(/nozi.jpg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}


  {/* <div className="bg-white rounded-2xl shadow-lg px-6 py-8 lg:px-16 lg:py-12 w-full">
    <div className="flex flex-col justify-center items-start gap-4 text-black">
      <h3 className="text-xl lg:text-3xl font-semibold">
        SGC Virtual Adoption
      </h3>
      <span className="flex flex-col gap-2">
        <p className="text- lg:text-lg font-semibold tracking-wider">
          Virtually Adopt a Child in Gaza
        </p>
        <p className="text-sm lg:text-base font-light">
          Through SGC Virtual Adoption, you can provide for a child&apos;s
          needs in Gaza. Your support will cover essentials such as food,
          clothing, and education, making a significant impact on their
          life and future.
        </p>
      </span>
      <Link href="virtualAdoption">
        <button className="p-2 text-xs md:text-base lg:text-lg lg:p-3 py-3 px-4 lg:px-6 rounded-3xl bg-[#22C55E] text-white hover:bg-[#D0312D] transition-all ease-in-out duration-200">
          View Details
        </button>
      </Link>
    </div>
  </div> */}
{/* </div> */}