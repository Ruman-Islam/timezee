import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import React from "react";

const ReturnScreen = () => {
  return (
    <Layout title="Returns">
      <AccountWizard title="Returns" />
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is Return page</div>
      </div>
    </Layout>
  );
};

ReturnScreen.auth = true;
export default ReturnScreen;
