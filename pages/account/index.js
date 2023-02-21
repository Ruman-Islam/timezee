import React from "react";
import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const MyAccountScreen = () => {
  return (
    <Layout title="My Account">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="My Account" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div>This is my account</div>
        </div>
      </div>
    </Layout>
  );
};

MyAccountScreen.auth = true;
export default MyAccountScreen;
