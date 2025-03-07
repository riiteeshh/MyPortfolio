"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AboutPage() {
  const [educationData] = useState([
    {
      id: 1,
      year: "Till-2015",
      title: "SLC",
      institution: "Aishwarya Vidya Niketan",
      side: "right",
    },
    {
      id: 2,
      year: "2016-2018",
      title: "Science,+2",
      institution: "Nepal Mega College",
      side: "left",
    },
    {
      id: 3,
      year: "2018-2023",
      title: "Computer Engineering",
      institution: "Kantipur Engineering College",
      side: "right",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-4">
        ABOUT ME
      </h1>
      <div className="text-center mb-20 italic group">
        <p className="text-gray-400">
          Hi, my name is{" "}
          <span className="font-bold  text-red-500 group-hover:animate-pulse">
            Ritesh Pandey
          </span>
          , and I am a passionate web and mobile app developer. I have
          experience in building high-quality applications using modern
          technologies such as
          <span className="font-semibold">
            Flutter, JavaScript, Next.js, TypeScript, HTML, CSS, and Tailwind
            CSS
          </span>
          . Throughout my career, I have worked on developing both mobile and
          web applications, ensuring seamless user experiences and efficient
          performance. I enjoy transforming ideas into functional and visually
          appealing digital solutions.
        </p>
      </div>

      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          EDUCATION
        </h1>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

          <div className="space-y-32">
            {educationData.map((item) => (
              <div key={item.id} className="relative">
                {/* Year marker with dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-red-500 z-10"></div>
                </div>

                {/* Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    item.side === "left" ? "md:text-right" : ""
                  }`}
                >
                  {/* Left side content */}
                  {
                    <div
                      className={`group ${
                        item.side === "left"
                          ? "md:pr-16 md:ml-auto"
                          : "md:order-last md:pl-16"
                      }`}
                    >
                      <div className="cursor-pointer text-6xl md:text-7xl font-bold transition-all duration-300 group-hover:text-red-500 group-hover:scale-110 mt-4">
                        {item.year}
                      </div>
                      <div className="cursor-pointer">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{item.institution}</p>
                      </div>
                    </div>
                  }

                  {/* Empty column for spacing */}
                  <div
                    className={`${item.side === "left" ? "md:order-last" : ""}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
