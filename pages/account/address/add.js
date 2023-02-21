import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const AddAddressScreen = () => {
  return (
    <Layout title="Add Address">
      <AccountWizard title="Add Address" />
      <div className="flex flex-col lg:flex-row gap-x-2">
        <AccountSidebar />
        <div>This is Add Address page</div>
      </div>
    </Layout>
  );
};

AddAddressScreen.auth = true;
export default AddAddressScreen;
