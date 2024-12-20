import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

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

const CardsCarousel = ({ data }) => {
  return (
    <div className="w-full p-8  bg-white shadow-lg rounded-2xl flex flex-row gap-6 justify-between items-center">
      {/* Carousel Section */}
      <div className="w-full md:w-[50%]">
        <Slider {...sliderSettings}>
          {data.img.map((src, index) => (
            <div key={index} className="px-3">
              <Image
                width={500}
                height={300}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-4 relative -top-12">
        <div className="w-28 h-24 bg-[#22C55E] rounded-2xl relative -top-8 left-16 flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-12 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
          </svg>
        </div>
        {/* Heading */}
        <div>
          <h2 className="text-black text-xl md:text-2xl font-semibold mb-3">
            {data.name}
          </h2>
          <p className="text-black">{data.text}</p>
        </div>

        {/* Actions */}
        <div>
          <Link href={`/${data.url}`}>
            <span className="inline-block py-3 px-6 bg-[#22C55E] text-white text-center rounded-3xl font-semibold hover:bg-[#D0312D] transition-all ease-in-out duration-200">
              Donate
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsCarousel;
