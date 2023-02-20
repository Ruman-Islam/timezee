import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import React from "react";

const ReturnScreen = () => {
  return (
    <Layout title="Returns">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Returns" />
        <div className="flex gap-x-5">
          <AccountSidebar />
          <div>This is Return page</div>
        </div>
      </div>
    </Layout>
  );
};

ReturnScreen.auth = true;
export default ReturnScreen;
