import Image from "next/image";

export default function Collab() {
  return (
    <div className="px-12 bg-[#22C55E] rounded-2xl shadow-lg">
      <div className="flex flex-col justify-between items-center p-10 px-20 bg-white  rounded-[2rem] text-black gap-10">
        <h2 className="text-5xl font-semibold ">Our Partners</h2>
        <p className="text-lg">
          We are collaborating with{" "}
          <span className="font-semibold">Shab-e-AbiTalib</span> and{" "}
          <span className="font-semibold">Friends of Palestine</span> to provide
          critical aid to the people of Gaza. Our primary role is to raise and
          collect funds, which are then directed to our trusted partners
          actively working on the ground to deliver essential assistance. We are
          committed to doing everything in our power to support this vital
          cause.
        </p>
        <div className="flex flex-row justify-between items-center w-full px-20">
          <span>
            <Image
              src="/save-gaza-logo.png"
              width={200}
              height={200}
              alt="logo"
            />
          </span>
          <span>
            <Image src="/shab-logo.png" width={180} height={180} alt="logo" />
          </span>
        </div>
      </div>
    </div>
  );
}
