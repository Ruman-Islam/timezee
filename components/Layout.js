import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - pCommerce" : "pCommerce"}</title>
        <meta name="description" content="pCommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <main>{children}</main>
        <footer>Copyright © 2022 pCommerce</footer>
      </div>
    </>
  );
};

export default Layout;
