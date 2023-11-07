import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import React from "react";

const NewsletterScreen = () => {
  return (
    <Layout title="Newsletter">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Newsletter" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="p-5 w-full flex items-center justify-center">
            <span className="text-amazonBlue">
              Currently no newsletter available!
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

NewsletterScreen.auth = true;
export default NewsletterScreen;
