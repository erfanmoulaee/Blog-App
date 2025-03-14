import Link from "next/link";

async function CategoryList() {
  // await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`, { cache: "force-cache" });
  const {
    data: { categories },
  } = await res.json();
  return (
    <div>
      <ul className="space-y-4">
        <Link href={`/blogs`}>همه</Link>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryList;
