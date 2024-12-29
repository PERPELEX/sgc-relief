import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ListItem from "./listItem";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isIconClicked2, setIsIconClicked2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [path, setPath] = useState(null);

  // assign initial path
  useEffect(() => {
    if (router.asPath) {
      setPath(router.asPath); // Update state when the query is available
    }
  }, [router.asPath]);

  //   assign path if it changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      // console.log('App is changing to: ', url);
      setPath(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIconClicked(!isIconClicked);
    setIsDropdownOpen2(false);
    setIsIconClicked2(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsIconClicked2(!isIconClicked2);
    setIsDropdownOpen(false);
    setIsIconClicked(false);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const items1 = [
    {
      name: "OnGround Activities",
      url: "/groundActivities",
    },
    {
      name: "Monthly Subscription",
      url: "/subscription",
    },
    {
      name: "Virtual Adoption",
      url: "/virtualAdoption",
    },
  ];

  const items2 = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "https://www.savegazacampaign.org",
    },
    {
      name: "Contact Us",
      url: "https://www.savegazacampaign.org/contact",
    },
  ];

  const list1 = items1.map((item, index) => {
    return (
      <ListItem
        key={index}
        itemName={item.name}
        url={item.url}
        active={path === item.url}
      />
    );
  });
  const list2 = items2.map((item, index) => {
    return (
      <ListItem
        key={index}
        itemName={item.name}
        url={item.url}
        active={path === item.url}
      />
    );
  });

  return (
    <header
      className={`bg-[#111] text-white noto flex flex-col px-4 md:px-20 py-6 shadow-2xl z-50 transition-all duration-900 ease-in-out poppins ${
        isDropdownOpen || isDropdownOpen2 ? "max-h-[1000px]" : "max-h-[90px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="text-2xl font-bold flex flex-row items-center gap-x-8 ">
              {/* <span
                            className={`cursor-pointer hidden md:flex ${isIconClicked ? 'text-[#22C55E] rotate-90' : 'text-white rotate-0'} hover:text-[#22C55E] transition-all duration-300`}
                            onClick={toggleDropdown}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="3" y="5" width="18" height="2" fill="currentColor" />
                                <rect x="3" y="11" width="14" height="2" fill="currentColor" />
                                <rect x="3" y="17" width="10" height="2" fill="currentColor" />
                            </svg>
                        </span> */}

              <Image
                src="/save-gaza-logo.png"
                width={45}
                height={45}
                alt="logo"
              />

              <h1 className="text-2xl font-semibold ">SGC Relief Activities</h1>
            </div>
          </Link>
        </div>

        <nav className="flex items-center gap-x-16">
          {/* Navigation Links */}
          <span className="hidden md:flex items-center gap-x-16">
            <Link href="/">
              <span
                className={`${
                  path === "/" ? "text-[#22C55E]" : ""
                } hover:text-[#22C55E] cursor-pointer transition-colors duration-300`}
              >
                Home
              </span>
            </Link>
            <Link href="https://www.savegazacampaign.org">
              <span
                className={`${
                  path === "/about" ? "text-[#22C55E]" : ""
                } hover:text-[#22C55E] cursor-pointer transition-colors duration-300`}
              >
                About Us
              </span>
            </Link>
            <span
              onClick={toggleDropdown}
              className={`${
                isDropdownOpen || router.query.service
                  ? "text-[#22C55E]"
                  : "text-white"
              } flex flex-row items-center  hover:text-[#22C55E] cursor-pointer transition-colors duration-300`}
            >
              <p>Activities</p>
              <svg
                className={`ml-2 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>

          {/* Login Button */}
          <Link href="https://www.savegazacampaign.org/contact">
            <button
              className={`${
                // path === "/contact"
                //   ? "bg-[#111} text-[#22C55E] border-[#22c55e]"
                //   : "bg-[#22c55e] text-white border-[#22c55e]"
                ""
              } hidden md:flex font-semibold border-2 hover:bg-[#111] hover:text-[#22C55E] hover:border-[#22c55e] px-4 py-2 rounded-3xl transition-colors duration-300`}
            >
              Contact Us
            </button>
          </Link>
          <span
            className={`mr-2 cursor-pointer flex md:hidden ${
              isIconClicked2
                ? "text-[#22C55E] -rotate-90"
                : "text-white rotate-0"
            } hover:text-[#22C55E] transition-all duration-300`}
            onClick={toggleDropdown2}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="2" fill="currentColor" />
              <rect x="7" y="11" width="14" height="2" fill="currentColor" />
              <rect x="11" y="17" width="10" height="2" fill="currentColor" />
            </svg>
          </span>
        </nav>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "max-h-44 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Services</p>
          {list1}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen2
            ? "max-h-70 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Check</p>
          {list2}
          <div
            onClick={handleToggle}
            className="flex items-center cursor-pointer"
          >
            <p className="text-xl mt-2 mb-2">Services</p>
            <svg
              className={`ml-2 transition-transform duration-300 ${
                isToggled || router.query.service ? "rotate-180" : "rotate-0"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {(isToggled || router.query.service) && list1}
        </div>
      </div>
    </header>
  );
}
