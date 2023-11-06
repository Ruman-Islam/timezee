import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const OrderScreen = () => {
  return (
    <Layout title="Order History">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Order History" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div>This is order page</div>
        </div>
      </div>
    </Layout>
  );
};

OrderScreen.auth = true;
export default OrderScreen;
