import Link from "next/link";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout title={"Home Page"} content="Home page">
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
