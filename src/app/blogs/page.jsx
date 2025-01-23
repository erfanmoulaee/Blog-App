import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

async function BlogPage() {
  return (
    <div>
      <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه د کرد. در این صورت می توان امید داشت که تمام و دشوا</h1>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
