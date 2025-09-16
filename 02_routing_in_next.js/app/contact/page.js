import Link from "next/link";

export default function contact() {
  return (
    <div>
      <h1>Welcome to the Contact Page!</h1>
      <Link className="text-3xl font-bold underline" href="/">
        Home
      </Link>
    </div>
  );
}
