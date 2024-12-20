import React from "react";
import Link from "next/link";

export default function ServiceSubscriptionAdoption() {
  return (
    <div className="flex flex-row justify-between items-center gap-12">
      {/* image */}
      <div className=" bg-white rounded-2xl shadow-lg p-8 flex items-center">
        <div
          className="w-[400px] h-[650px] rounded-2xl shadow-lg bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(/samplePic2.jpg)` }}
        ></div>
      </div>

      {/* Services */}
      <div className=" flex flex-col justify-center item-center gap-12">
        {/* service 1 */}
        <div className="bg-white rounded-2xl shadow-lg px-16 py-12">
          <div className="w-auto flex flex-col justify-center items-start gap-4 text-black ">
            <h3 className=" text-3xl font-semibold">
              SGC Monthly Subscription
            </h3>
            <span className=" flex flex-col gap-2">
              <p className="text-lg font-semibold tracking-wider">
                Support Gaza with a Monthly Contribution
              </p>
              <p className=" font-light">
                Join the SGC Monthly Subscription program to provide continuous
                support to the people of Gaza. Your monthly contributions will
                help fund essential services and relief efforts, ensuring
                sustained aid and support for those in need.
              </p>
            </span>
            <Link href="subscription">
              <button className=" p-3 px-6 rounded-3xl bg-[#22C55E] text-white  hover:bg-[#D0312D] transition-all ease-in-out duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
        {/* service 2 */}
        <div className="bg-white rounded-2xl shadow-lg px-16 py-12">
          <div className="w-auto flex flex-col justify-center items-start gap-4 text-black ">
            <h3 className=" text-3xl font-semibold">SGC Virtual Adoption</h3>
            <span className=" flex flex-col gap-2">
              <p className="text-lg font-semibold tracking-wider">
                Virtually Adopt a Child in Gaza
              </p>
              <p className="font-light">
                Through SGC Virtual Adoption, you can provide for a childs needs
                in Gaza. Your support will cover essentials such as food,
                clothing, and education, making a significant impact on their
                life and future.
              </p>
            </span>
            <Link href="virtualAdoption">
              <button className=" p-3 px-6 rounded-3xl bg-[#22C55E] text-white  hover:bg-[#D0312D] transition-all ease-in-out duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
