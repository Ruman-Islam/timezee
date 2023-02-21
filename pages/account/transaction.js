import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const TransactionScreen = () => {
  return (
    <Layout title="Transaction">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Transaction" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div>This is Transaction page</div>
        </div>
      </div>
    </Layout>
  );
};

TransactionScreen.auth = true;
export default TransactionScreen;
