import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">About Page</h1>
      <Link className="text-3xl font-bold underline" href="/">
        Home
      </Link>
    </div>
  );
}

// File: 02_routing_in_next.js/app/about/page.js
