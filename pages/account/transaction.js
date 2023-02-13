import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const TransactionScreen = () => {
  return (
    <Layout title="Transaction">
      <AccountWizard title="Transaction" />
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is Transaction page</div>
      </div>
    </Layout>
  );
};

TransactionScreen.auth = true;
export default TransactionScreen;
