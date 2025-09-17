import Link from "next/link";

const ServicesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Services Page</h1>
      <Link className="text-3xl font-bold underline" href="/services/web-dev">
        Web Development
      </Link>
      <br />
      <Link className="text-3xl font-bold underline" href="/services/seo">
        SEO
      </Link>
    </div>
  );
};

export default ServicesPage;
