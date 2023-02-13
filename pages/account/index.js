import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import React from "react";

const MyAccountScreen = () => {
  return (
    <Layout title="My Account">
      <AccountWizard title="My Account" />
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is my account</div>
      </div>
    </Layout>
  );
};

MyAccountScreen.auth = true;
export default MyAccountScreen;
