import React from "react";
import Heading from "@/components/Heading";
import ServiceDirectAid from "@/components/ServiceDirectAid";
import ServiceOnGround from "@/components/ServiceOnGround";
import ServiceSubscriptionAdoption from "@/components/ServiceSubscription&Adoption";

const ServicesData = [
  {
    img: "/samplePic.jpg",
    name: "Gaza Direct Aid Portal",
    heading: "Help Monetarily to Ensured Families",
    text: "Make a real difference by directly connecting with and supporting Palestinian families in need. Your trusted donations will reach those who need it most, ensuring your generosity has a meaningful impact.",
    url: "directAid",
  },
  {
    img: "/samplePic.jpg",
    name: "SGC OnGround Activities",
    heading: "Supporting Gaza with Essential Services",
    text: "SGC OnGround Activities in Gaza provide essential services to support the community. Our Food Camps, Cloth Drive, and Medical Camps ensure nourishment, warmth, and health. Join us in making a positive impact and bringing relief to Gaza.",
    url: "groundActivities",
  },
  {
    img: "/samplePic.jpg",
    name: "SGC Monthly Subscription",
    heading: "Support Gaza with a Monthly Contribution",
    text: "Join the SGC Monthly Subscription program to provide continuous support to the people of Gaza. Your monthly contributions will help fund essential services and relief efforts, ensuring sustained aid and support for those in need.",
    url: "subscription",
  },
  {
    img: "/samplePic.jpg",
    name: "SGC Virtual Adoption",
    heading: "Virtually Adopt a Child in Gaza",
    text: "Through SGC Virtual Adoption, you can provide for a child's nexeds in Gaza. Your support will cover essentials such as food, clothing, and education, making a significant impact on their life and future.",
    url: "virtualAdoption",
  },
];

export default function Services() {
  return (
    <div id="services" className="w-full h-auto bg-graphite ">
      <Heading
        text="Join Us in the Mission"
        className="text-black text-center mb-4 md:mb-16"
      />
      <div className="flex flex-col gap-16 md:gap-32 mt-8 md:mt-24">
        {/* <ServiceDirectAid /> */}
        <ServiceOnGround />
        <ServiceSubscriptionAdoption />
      </div>
    </div>
  );
}
