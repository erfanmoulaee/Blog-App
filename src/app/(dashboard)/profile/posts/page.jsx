import React, { Suspense } from "react";
import PostTable from "./_/components/PostTable";
import Spinner from "@/ui/Spinner";

function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <PostTable />
    </Suspense>
  );
}

export default Page;
