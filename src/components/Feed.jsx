import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

export default function Feed() {
  return (
    <main>
      <section>
        {/* Stories */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>
      <section>
        {/* mini profile */}
        {/* suggestions */}
      </section>
    </main>
  );
}
