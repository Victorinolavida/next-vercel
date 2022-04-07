import Head from "next/head";
import React from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

interface Layout {
  children: JSX.Element | JSX.Element[];
  title?: string;
  content?: string;
}

const MainLayout = ({ children, title, content }: Layout) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
