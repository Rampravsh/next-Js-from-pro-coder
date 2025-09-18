import Link from "next/link";

const ServicesPage = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-3xl font-bold underline">Services Page</h1>
        <Link
          className="text-blue-500 hover:underline"
          href="/services/web-dev"
        >
          Web Development
        </Link>
        <br />
        <Link className="text-blue-500 hover:underline" href="/services/seo">
          SEO
        </Link>
      </div>
    </div>
  );
};
export default ServicesPage;
