import Link from "next/link";

const ServicesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Services Page</h1>
      <Link className="text-3xl font-bold underline" href="/">
        Home
      </Link>
    </div>
  );
};

export default ServicesPage;
