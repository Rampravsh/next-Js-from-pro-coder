export default async function CatchAllRoutes({ params }) {
    const { urlPath } = await params;
  return (
    <div className="p-10">
      <h1>Catch All Routes</h1>
      <p>/{urlPath.join("/")}</p>
    </div>
  );
}
