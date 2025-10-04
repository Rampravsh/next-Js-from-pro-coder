export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.map(({ id }) => ({ blogID: `${id}` }));
  // return [
  //   { blogID: "1" },
  //   { blogID: "2" },
  //   { blogID: "3" },
  //   { blogID: "4" },
  //   { blogID: "5" },
  // ];
}

export default async function Page({ params }) {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  return (
    <div>
      <h1>Blog Post: {blogID}</h1>
    </div>
  );
}
