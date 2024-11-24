import React, { useState } from "react"

export default function SubService({ title, description, bgColor, icon, index }) {

    const [hover, setHover] = useState(false)

    function onEnter() {
        setHover(true);
    }
    function onLeave() {
        setHover(false);
    }
    

    return (
        <div
            onMouseEnter={() => { onEnter() }}
            onMouseLeave={() => { onLeave() }}
            key={index}
            className={`w-auto flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg text-white ${bgColor}`}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">
                {title}
            </h3>
            <p className="text-sm mb-4">{description}</p>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill={hover ? "currentColor" : "none"}
                className=""
                stroke={!hover ? "currentColor" : "none"}
                strokeWidth={!hover ? 1.5 : 0}
            >
                {!hover && (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                )}
                {hover && (
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                        clipRule="evenodd"
                    />
                )}
            </svg>

        </div>
    );
}