import Link from "next/link";


export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h2 className="text-3xl font-bold text-red-600">404 - Page Not Found</h2>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Go back to Home
      </Link>
    </div>
  );
}
