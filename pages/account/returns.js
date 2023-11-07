import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import React from "react";

const ReturnScreen = () => {
  return (
    <Layout title="Returns">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Returns" />
        <div className="flex flex-col lg:flex-row gap-x-2 w-full">
          <AccountSidebar />
          <div className="p-5 w-full flex items-center justify-center">
            <span className="text-amazonBlue">
              Currently no returning available!
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

ReturnScreen.auth = true;
export default ReturnScreen;
