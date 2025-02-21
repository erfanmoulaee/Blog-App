import React, { Suspense } from "react";
import PostTable from "./_/components/PostTable";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";

async function Page({ searchParams }) {
  const query = queryString.stringify(await searchParams);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست ها </h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostTable query={query} />
      </Suspense>
    </div>
  );
}

export default Page;
