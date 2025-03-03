"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function LogoRotating() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.replace("/")}
      className="absolute top-0 transform left-10 -translate-x-1/2"
    >
      <Image
        alt="R P"
        width="80"
        height="80"
        className="animate-[spinX_3s_linear_infinite]"
        src="/images/main-logo-white.png"
      />
    </div>
  );
}
