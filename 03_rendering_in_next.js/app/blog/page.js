import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-5xl font-bold m-10">
        Welcome to Our Blog
      </div>
      <div className="flex flex-col items-center justify-center underline">
        <Link href="/blog/1">Blog 1</Link>
        <Link href="/blog/2">Blog 2</Link>
        <Link href="/blog/3">Blog 3</Link>
      </div>
    </div>
  );
}
