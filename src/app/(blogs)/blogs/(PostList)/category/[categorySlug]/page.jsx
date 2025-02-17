import PostList from "@/app/blogs/_components/PostList";
import { getPosts } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  // params ==> fetch server ==>
  const { categorySlug } = await params;

  const queries = `${queryString.stringify(await searchParams)}&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  return <div>{posts.length === 0 ? <p>پستی در این دسته بندی پیدا نشد</p> : <PostList posts={posts} />}</div>;
}

export default Category;
