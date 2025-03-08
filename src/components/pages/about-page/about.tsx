"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function AboutPage() {
  const [educationHoverIndex, setEducationHoverIndex] = useState(-1);
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


  const [experienceData] = useState([
    {
      id: 1,
      year: "2022",
      title: "Flutter Developer Intern",
      institution: "CREATORS TECH",
      period: "Dec 2022 - Jan 2023",
    },
    {
      id: 2,
      year: "2023",
      title: "Software Engineer Intern",
      institution: "LIS NEPAL",
      period: "Oct 2023 - Jan 2024",
    },
    {
      id: 3,
      year: "2024",
      title: "ASSOCIATE SOFTWARE ENGINEER",
      institution: "LIS NEPAL",
      period: "Jan 2024 - Jan 2025",
    },
    {
      id: 4,
      year: "2025",
      title: "Software Engineer I",
      institution: "LIS NEPAL",
      period: "Jan 2025 - Present",
    },
  ])
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
                  <div
                    className={`w-4 h-4  rounded-full border-4 z-10 ${
                      educationHoverIndex === item.id
                        ? "border-white bg-red-500 transition-all animate-pulse"
                        : "bg-white border-red-500 transition-all"
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    item.side === "left" ? "md:text-right" : ""
                  }`}
                >
                  {
                    <div
                      onMouseEnter={() => {
                        setEducationHoverIndex(item.id);
                      }}
                      onMouseLeave={() => {
                        setEducationHoverIndex(-1);
                      }}
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
                  <div
                    className={`${item.side === "left" ? "md:order-last" : ""}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          EXPERIENCE
        </h1>
  
       <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-50 gap-y-25 pl-24 md:pl-35">
         {experienceData.map((item) => (
           <div key={item.id} className="group relative">
             {/* Large year as the main visual element - now in front with z-index */}
             <div className= "transition-all group-hover:text-red-500 group-hover:scale-110 absolute left-[-180px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white opacity-40 group-hover:opacity-90 leading-none z-20">
               {item.year}
               {item.period && <p className="text-sm text-gray-400 mb-4">{item.period}</p>}

             </div>
 
             {/* Card */}
             <Card className="bg-zinc-900 text-white p-6 justify-end items-end  rounded-none shadow-xl border-0 w-full z-10 relative py-15">
               <h3 className="text-2xl font-bold mb-1 text-end">{item.title}</h3>
               <p className="text-xl text-red-500 mb-4 font-bold">{item.institution}</p>
 
 
               {/* {item.technologies && item.technologies.length > 0 && (
                 <div className="space-y-1">
                   {item.technologies.map((tech, techIndex) => (
                     <p key={techIndex} className="text-gray-400">
                       {tech}
                     </p>
                   ))}
                 </div>
               )} */}
             </Card>
           </div>
         ))}
       </div>
</div>


    </div>
  );
}
