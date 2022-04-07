import React from "react";
import Link from "next/link";
import MainLayout from "../../components/layout/MainLayout";
import { DarkLayout } from "../../components/layout/DarkLayout";

export default function Princing() {
  return (
    <>
      <h1 className="title">
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/princing/index.jsx</code>
      </p>
    </>
  );
}

Princing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
