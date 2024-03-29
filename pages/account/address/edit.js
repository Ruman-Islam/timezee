import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import Form from "@/components/UI/Form";
import { editAddressFormValues } from "@/constants/common";

const AddressEditScreen = () => {
  return (
    <Layout title="Edit Address">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Edit Address" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="w-full p-5">
            <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1 mt-10">
              <h4 className="uppercase">EDIT YOUR ADDRESS</h4>
            </div>
            <Form arrayData={editAddressFormValues} buttonText="change" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

AddressEditScreen.auth = true;
export default AddressEditScreen;
