import Head from "next/head";

import React from "react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import MainLayout from "../components/layout/MainLayout";

export default function contact() {
  return (
    <MainLayout title="Contact Page" content="contact page">
      <h1 className="title">
        {/* Ir a <a href="/">Home</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
