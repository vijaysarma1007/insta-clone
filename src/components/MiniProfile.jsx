import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://media.licdn.com/dms/image/C4D03AQHlNbU1ax63SA/profile-displayphoto-shrink_800_800/0/1663518377497?e=2147483647&v=beta&t=dGCBr3ZP1Dar_qsU1CdJE-IOmV_LvFDpHa7aTei0Onk"
        alt="user profile image"
        className="h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Vijay Mohan</h2>
        <h3 className="text-gray-400 text-sm">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
}
