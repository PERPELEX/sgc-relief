import Image from "next/image";
import Heading from "@/components/Heading";

export default function Collab() {
  return (
    <div className="py-10 bg-gradient-to-b from-[#f0fdf4] to-[#22C55E] rounded-2xl shadow-xl">
      <Heading text="Our Collaborators" className="text-black text-4xl font-extrabold text-center mb-8" />
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-white to-[#f9fafb] p-10 rounded-3xl shadow-lg">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            We are collaborating with
            <span className="font-semibold text-black"> Shab-e-AbiTalib</span> and
            <span className="font-semibold text-black"> Friends of Palestine</span> 
            to provide
            critical aid to the people of Gaza. Our primary role is to raise and collect funds,
            which are then directed to our trusted partners actively working on the ground to deliver
            essential assistance. We are committed to doing everything in our power to support this
            vital cause.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          
          <div className="group relative flex flex-col items-center gap-3">
            <Image
              src="/shab-logo.png"
              width={150}
              height={150}
              alt="Shab-e-AbiTalib Logo"
              className="rounded-full border-4 border-[#22C55E] shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-black font-semibold text-lg">Shab-e-AbiTalib</p>
          </div>
          <div className="group relative flex flex-col items-center gap-3">
            <Image
              src="/save-gaza-logo.png"
              width={150}
              height={150}
              alt="Save Gaza Logo"
              className="rounded-full border-4 border-[#22C55E] shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-black font-semibold text-lg">Save Gaza</p>
          </div>
          <div className="group relative flex flex-col items-center gap-3">
            <Image
              src="/fop.jpg"
              width={150}
              height={150}
              alt="FOP Logo"
              className="rounded-full border-4 border-[#22C55E] shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-black font-semibold text-lg">Friends Of Palestine</p>
          </div>
        </div>
      </div>
    </div>
  );
}
