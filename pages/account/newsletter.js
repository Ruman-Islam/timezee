import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import React from "react";

const NewsletterScreen = () => {
  return (
    <Layout title="Newsletter">
      <AccountWizard title="Newsletter" />
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is Newsletter page</div>
      </div>
    </Layout>
  );
};

NewsletterScreen.auth = true;
export default NewsletterScreen;
