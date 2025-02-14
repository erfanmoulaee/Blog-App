import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0 ? "هیچ پستی با این مشخصات پیدا نشد" : `نشان دادن ${posts.length}نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}

      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;
