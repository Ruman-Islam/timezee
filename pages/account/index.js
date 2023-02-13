import AccountSidebar from "@/components/Account/AccountSidebar";
import Layout from "@/components/Layout";
import React from "react";

const MyAccountScreen = () => {
  return (
    <Layout title="My Account">
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is my account</div>
      </div>
    </Layout>
  );
};

export default MyAccountScreen;
