import Breadcrumbs from "@/ui/BreadCrumbs";

export default function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />
      create post form
    </div>
  );
}
