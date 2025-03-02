"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function LandingPage() {
  const text: string[] = ["MOBILE APP DEVELOPER", "WEB DEVELOPER"];
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [streamedText, setStreamedText] = useState("");

  async function* streamText(textArray: Array<string>) {
    while (true) {
      for (const text of textArray) {
        for (const t of text) {
          setStreamedText((prev) => prev + t); // Append character
          await delay(100); // Delay of 0.5 second
        }
        await delay(500); // Delay of 0.5 second
        setStreamedText(""); // Clear text after one cycle
      }
    }
  }

  useEffect(() => {
    const textStream = streamText(text);
    textStream.next(); // Start the text streaming once when component mounts
  }, []); //eslint-disable-line

  return (
    <div className="w-full h-[100dvh] flex justify-between items-center px-10 py-10 relative cursor-default bg-accent-foreground">
      {/* About Button */}
      <div className="absolute top-0  transform -translate-x-1/2">
        <Image
          alt="R P"
          width="80"
          height="80"
          className="animate-[spinX_3s_linear_infinite]"
          src="/images/main-logo-white.png"
        />
      </div>
      <div className="relative">
        <Button
          variant="ghost"
          className="transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 rotate-90 hover:bg-transparent p-0 m-0"
        >
          <span className="text-white text-xl font-bold block transition-all duration-300 hover:scale-150 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text">
            About
          </span>
        </Button>
      </div>

      {/* Center Text with Gradient on Hover */}
      <div className="flex-col flex justify-between h-full">
        <div className="relative">
          <Button
            variant="ghost"
            className="transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 hover:bg-transparent p-0 m-0"
          >
            <span className="text-white text-xl font-bold block transition-all duration-300 hover:scale-150 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text">
              Experience
            </span>
          </Button>
        </div>
        <div>
          <div className="flex justify-center items-center gap-6">
            {/* <Image
              alt="R P"
              width="110"
              height="110"
              src="/images/tech-guy.png"
              className="-rotate-45 animate-[spinX_3s_linear_infinite]"
            /> */}
             <Image
              alt="R P"
              width="150"
              height="150"
              src="/images/tech-guy.png"
              className="hover:scale-115 transition-all hover:animate-pulse"
            />
             {/* <Image
              alt="R P"
              width="110"
              height="110"
              src="/images/tech-guy.png"
              className="rotate-45 animate-[spinX_3s_linear_infinite]"
            /> */}
          </div>
          <p className="text-center text-white font-extrabold text-5xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text">
            Namaste - It&apos;s Ritesh
          </p>
          <p className="text-center pt-2 font-extrabold text-5xl transition-all duration-300 hover:scale-110 scale-80 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            {streamedText}
          </p>
        </div>
        <div className="relative bottom-10">
          <Button
            variant="ghost"
            className="transition-all flex absolute duration-300 left-1/2 transform -translate-x-1/2 hover:bg-transparent p-0 m-0"
          >
            <span className="text-white text-xl font-bold block transition-all duration-300 hover:scale-150 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-transparent hover:bg-clip-text">
              Skill
            </span>
          </Button>
        </div>
      </div>

      {/* Projects Button */}
      <div className="relative">
        <Button
          variant="ghost"
          className="transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 -rotate-90 hover:bg-transparent p-0 m-0"
        >
          <span className="text-white text-xl font-bold block transition-all duration-300 hover:scale-150 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-transparent hover:bg-clip-text">
            Projects
          </span>
        </Button>
      </div>
    </div>
  );
}
