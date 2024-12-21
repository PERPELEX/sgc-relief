import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { activitiesData } from "@/data/activitiesData";

// Custom Previous Button
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-green-700 text-white p-2 rounded-full shadow bg-[#22C55E] transition-all ease-in-out duration-200"
    onClick={onClick}
    style={{ zIndex: 1 }}
  >
    &#9664;
  </button>
);

// Custom Next Button
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-green-700 text-white p-2 rounded-full shadow bg-[#22C55E] transition-all ease-in-out duration-200"
    onClick={onClick}
    style={{ zIndex: 1 }}
  >
    &#9654;
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const AllActivities = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col items-center bg-[#22C55E] shadow-lg poppins rounded-2xl rounded-t-[2rem] p-4 md:p-8">
      {/* Tab Bar */}
      <div className="w-full flex flex-row justify-center bg-[#22C55E] py-4 rounded-[2rem]">
        <div className="w-full md:w-[80%] grid grid-cols-2 lg:flex lg:flex-row justify-center items-center flex-wrap gap-2 lg:gap-0">
          {activitiesData.map((data, index) => (
            <button
              key={index}
              className={`min-w-[120px] py-2 px-4 md:py-4 md:px-6 transition-colors duration-200 text-sm md:text-base font-semibold border-[#ddd] ${
                activeTab === index
                  ? "bg-[#ca3e3c] shadow-2xl"
                  : "bg-[#fff] text-black hover:bg-[#e1afae]"
              } ${
                index === 0
                  ? "border-r lg:rounded-l-3xl"
                  : index === activitiesData.length - 1
                  ? "border-l lg:rounded-r-3xl"
                  : "border-x"
              } rounded-lg lg:rounded-none`}
              onClick={() => setActiveTab(index)}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section for Active Tab */}
      {activitiesData[activeTab] && (
        <div className="w-full p-4 md:p-16 flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center bg-white rounded-t-[2rem] rounded-2xl">
          {/* Carousel Section */}
          <div className="w-full md:w-[30%]">
            <Slider {...sliderSettings}>
              {activitiesData[activeTab].img.map((src, index) => (
                <div key={index} className="px-3">
                  <Image
                    width={500}
                    height={300}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Description Section */}
          <div className="w-full md:w-auto flex flex-col justify-between gap-6">
            <h3 className="text-2xl md:text-5xl font-semibold text-black tracking-wide">
              {activitiesData[activeTab].name}
            </h3>
            <div>
              <h4 className="text-xl md:text-2xl font-medium text-black mb-2">
                {activitiesData[activeTab].heading}
              </h4>
              <p className="text-black text-base md:text-lg">
                {activitiesData[activeTab].text}
              </p>
            </div>

            <div className="flex mt-4">
              <Link href={`/${activitiesData[activeTab].url}`}>
                <span className="text-base md:text-lg py-2 md:py-4 px-4 md:px-8 bg-[#22C55E] text-white text-center rounded-3xl font-semibold hover:bg-[#D0312D] transition-all ease-in-out duration-200">
                  Donate Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllActivities;
