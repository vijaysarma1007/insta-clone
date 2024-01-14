import React from "react";
import { EllipsisHorizontalIcon, HeartIcon, BookmarkIcon, ChatBubbleLeftIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img src={userImg} alt={username} className="h-12 rounded-full object-cover border p-1 mr-3" />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post image */}
      <img src={img} alt={`Picture of ${caption}`} className="object-cover w-full" />

      {/* Post Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleLeftIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post Caption & Comments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input type="text" placeholder="Add your comment..." className="border-none flex-1 focus:ring-0" />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
}
