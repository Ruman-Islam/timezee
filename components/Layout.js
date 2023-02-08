import Head from "next/head";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Navigation/Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Electronics.Com.BD" : "pCommerce"}</title>
        <meta name="description" content="pCommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="m-auto mt-0 min-w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
