import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const AddressEditScreen = () => {
  return (
    <Layout title="Edit Address">
      <AccountWizard title="Edit Address" />
      <div className="flex flex-col lg:flex-row gap-x-2">
        <AccountSidebar />
        <div>This is Edit Address page</div>
      </div>
    </Layout>
  );
};

AddressEditScreen.auth = true;
export default AddressEditScreen;