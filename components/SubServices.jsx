import React, { useState } from "react";
import SubService from "@/components/SubService";


const services = [
    {
        title: "Donations",
        description: "Donate Daily Essentials",
        bgColor: " bg-gradient-to-t from-[#0e56a8] to-[#3c6ca3]",
        icon: "❤️‍🩹", // Replace with an actual SVG/icon
    },
    {
        title: "Cloth Drive",
        description: "Donating Clothes for All",
        bgColor: "bg-gradient-to-t from-[#ba8444] to-[#b89367]",
        icon: "👕", // Replace with an actual SVG/icon
    },
    {
        title: "Medical Camps",
        description: "Donating Medicines to Victims",
        bgColor: "bg-gradient-to-t from-[#7256a8] to-[#8572a8]",
        icon: "💊", // Replace with an actual SVG/icon
    },
    {
        title: "Monetary Help",
        description: "Helping Monetarily for Needs",
        bgColor: "bg-gradient-to-t from-[#72ba44] to-[#8aba6c]",
        icon: "💵", // Replace with an actual SVG/icon
    },
];


const SubServices = () => {

    const serviceModule = services.map(service => {
        return (
            <SubService title={service.title} description={service.description} bgColor={service.bgColor} icon={service.icon} />)
    })

    return (
        <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceModule   }
        </div>
    )
};

export default SubServices;
