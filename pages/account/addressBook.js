import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const AddressBookScreen = () => {
  return (
    <Layout title="Address Book">
      <AccountWizard title="Address Book" />
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is Address book</div>
      </div>
    </Layout>
  );
};

AddressBookScreen.auth = true;
export default AddressBookScreen;
