import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image src="https://static.fontget.com/i/n/instagram/preview@2x.png" layout="fill" className="object-contain" />
        </div>
        <div className="h-24 w-10 relative  lg:hidden cursor-pointer">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHIpwTBbuNCH-7-FhtZ_zDFCO51L6o1F4tw&usqp=CAU" layout="fill" className="object-contain" />
        </div>

        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
        </div>

        {/* Right */}
        <h1>right side</h1>
      </div>
    </div>
  );
}
