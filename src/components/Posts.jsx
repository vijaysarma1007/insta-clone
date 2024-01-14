import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImg:
        "https://media.licdn.com/dms/image/C4D03AQHlNbU1ax63SA/profile-displayphoto-shrink_800_800/0/1663518377497?e=2147483647&v=beta&t=dGCBr3ZP1Dar_qsU1CdJE-IOmV_LvFDpHa7aTei0Onk",
      img: "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Amazing vacation",
    },
    {
      id: "2",
      username: "vijay mohan",
      userImg:
        "https://media.licdn.com/dms/image/C4D03AQHlNbU1ax63SA/profile-displayphoto-shrink_800_800/0/1663518377497?e=2147483647&v=beta&t=dGCBr3ZP1Dar_qsU1CdJE-IOmV_LvFDpHa7aTei0Onk",
      img: "https://images.unsplash.com/photo-1704137477371-bed38523c2eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Amazing vacation again",
    },
    {
      id: "3",
      username: "vijay",
      userImg:
        "https://media.licdn.com/dms/image/C4D03AQHlNbU1ax63SA/profile-displayphoto-shrink_800_800/0/1663518377497?e=2147483647&v=beta&t=dGCBr3ZP1Dar_qsU1CdJE-IOmV_LvFDpHa7aTei0Onk",
      img: "https://plus.unsplash.com/premium_photo-1704497002984-c7d360f86cc0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Amazing vacation once more",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
      ))}
    </div>
  );
}
