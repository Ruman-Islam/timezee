import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Navigation/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? "TimeZee | " + title : "TimeZee"}</title>
        <meta name="description" content="TimeZee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="m-auto mt-0 min-w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
