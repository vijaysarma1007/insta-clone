import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
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
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <Image
            src="https://media.licdn.com/dms/image/C4D03AQHlNbU1ax63SA/profile-displayphoto-shrink_800_800/0/1663518377497?e=2147483647&v=beta&t=dGCBr3ZP1Dar_qsU1CdJE-IOmV_LvFDpHa7aTei0Onk"
            alt="user image"
            className="rounded-full cursor-pointer"
            width={35}
            height={35}
          />
        </div>
      </div>
    </div>
  );
}
