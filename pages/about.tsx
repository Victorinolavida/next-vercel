import React from "react";
import Link from "next/link";
import MainLayout from "../components/layout/MainLayout";
import { DarkLayout } from "../components/layout/DarkLayout";

export default function about() {
  return (
    <>
      <h1 className="title">
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.jsx</code>
      </p>
    </>
  );
}

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
