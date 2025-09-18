import Link from "next/link";

const navbar = () => {
  return (
    <div className="flex gap-5 justify-between ">
      <h1 className="text-3xl font-bold">
        <Link href="/">Next.js</Link>
      </h1>
      <div className="flex gap-5 text-lg">
        <Link href="/about">about</Link>
        <Link href="/blogs">blogs</Link>
        <Link href="/services">services</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};
export default navbar;
