export default async function BlogPage({ params }) {
  const { blog } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Blog Page {blog}</h1>
      <p>This is the blog page {blog}</p>
    </div>
  );
}
