import Link from "next/link";

export default async function BlogPage({ params }) {
  const { blog } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold underline">Blog Page {blog}</h1>
      <p>This is the blog page {blog}</p>
      <div className="mt-5">
        <Link className="text-blue-500 hover:underline" href="/blogs">Back to Blogs</Link>
      </div>
    </div>
  );
}
