import Image from "next/image";

export default function Home() {
  console.log("running on the server");
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <Image src="/globe.svg" alt="Next.js Logo" width={100} height={100} />
    </>
  );
}
