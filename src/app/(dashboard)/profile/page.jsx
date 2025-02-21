import PostTable from "./posts/_/components/PostTable";
import { Suspense } from "react";
import Cardswrapper from "./posts/_/components/Cardswrapper";
import Fallback from "@/ui/Fallback";

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <Cardswrapper />
      </Suspense>
      <h2 className="text-xl mb-8 text-secondary-600">آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <PostTable query="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
}

export default Profile;
