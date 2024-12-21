import Image from "next/image";
import Heading from "@/components/Heading";

export default function Collab() {
  return (
    <div>
      <Heading text="Our Collabrators" className="text-black" />
      <div className="px-4 md:px-12 bg-[#22C55E] rounded-2xl shadow-lg">
        <div className="flex flex-col justify-between items-center p-6 md:p-10 md:px-20 bg-white rounded-[2rem] text-black gap-6 md:gap-10">
          <p className="text-sm md:text-lg">
            We are collaborating with{" "}
            <span className="font-semibold">Shab-e-AbiTalib</span> and{" "}
            <span className="font-semibold">Friends of Palestine</span> to
            provide critical aid to the people of Gaza. Our primary role is to
            raise and collect funds, which are then directed to our trusted
            partners actively working on the ground to deliver essential
            assistance. We are committed to doing everything in our power to
            support this vital cause.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0 px-0 md:px-20">
            <span>
              <Image src="/fop.jpg" width={180} height={180} alt="logo" />
            </span>
            <span className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-10 text-[#2b9150]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <span>
              <Image
                src="/save-gaza-logo.png"
                width={160}
                height={160}
                alt="logo"
              />
            </span>
            <span className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-10 text-[#2b9150]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <span>
              <Image src="/shab-logo.png" width={150} height={150} alt="logo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
