import Link from "next/link";
export default async function BlogsPage() {
  const blogs = [
    { id: 1, title: "My First Blog" },
    { id: 2, title: "My Second Blog" },
  ];
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold underline">Blogs Page</h1>
      <p>This is the blogs page</p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link
              className="text-blue-500 hover:underline"
              href={`/blogs/${blog.id}`}
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
