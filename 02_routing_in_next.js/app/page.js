import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link className="text-3xl font-bold underline" href="/about">
        about
      </Link>
      <br />
      <Link className="text-3xl font-bold underline" href="/blogs">
        blogs
      </Link>
      <br />
      <Link className="text-3xl font-bold underline" href="/services">
        services
      </Link>
      <br />
      <Link className="text-3xl font-bold underline" href="/contact">
        contact
      </Link>
    </div>
  );
}
