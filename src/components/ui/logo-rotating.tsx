"use client"

import Image from "next/image"
export default function LogoRotating(){
    return(
        <div className="absolute top-0  transform left-10 -translate-x-1/2">
        <Image
          alt="R P"
          width="80"
          height="80"
          className="animate-[spinX_3s_linear_infinite]"
          src="/images/main-logo-white.png"
        />
      </div>
    )
}