import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  //get posts ==> [{slug:"slug-1"} , ...]

  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

export async function generateMetadata({ params }) {
  console.log(params);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.slug}`);
  const { data } = await res.json();
  const { post } = data || {};
  return {
    title: `پست ${post.title}`,
  };
}

async function singlePost({ params }) {
  // await new Promise((res) => setTimeout(() => res(), 3000));
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">{post.title}</h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video  overflow-hidden rounded-lg mb-10">
        <Image className="object-cover object-center hover:scale-110 transition-all ease-out duration-300" fill src={post.coverImageUrl} />
      </div>
      {/* {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <BlogComments post={post} /> */}
    </div>
  );
}

export default singlePost;
