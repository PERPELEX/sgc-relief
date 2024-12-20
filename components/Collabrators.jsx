import Image from "next/image";
import Heading from "@/components/Heading";

export default function Collab() {
  return (
    <div className="py-8 bg-gradient-to-b from-[#f0fdf4] to-[#22C55E] rounded-2xl shadow-2xl">
      <Heading text="Our Collaborators" className="text-black text-3xl font-bold text-center mb-6" />
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-[2rem] shadow-md">
        <p className="text-lg text-center leading-relaxed text-gray-700">
          We are collaborating with
          <span className="font-semibold text-black"> Shab-e-AbiTalib</span> and
          <span className="font-semibold text-black"> Friends of Palestine</span> to
          provide critical aid to the people of Gaza. Our primary role is to raise and collect funds,
          which are then directed to our trusted partners actively working on the ground to deliver
          essential assistance. We are committed to doing everything in our power to support this
          vital cause.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/save-gaza-logo.png"
              width={200}
              height={200}
              alt="Save Gaza Logo"
              className="rounded-full shadow-md border-4 border-[#22C55E]"
            />
            <p className="text-black font-medium">Save Gaza</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/shab-logo.png"
              width={180}
              height={180}
              alt="Shab-e-AbiTalib Logo"
              className="rounded-full shadow-md border-4 border-[#22C55E]"
            />
            <p className="text-black font-medium">Shab-e-AbiTalib</p>
          </div>
        </div>
      </div>
    </div>
  );
}
