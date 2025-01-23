import React from "react";

async function BlogPage() {
  await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  return (
    <div>
      {posts.map((post) => {
        return <div>{post.title}</div>;
      })}
    </div>
  );
}

export default BlogPage;
