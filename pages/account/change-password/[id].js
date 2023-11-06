import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import Form from "@/components/UI/Form";
import { changePasswordFormValues } from "@/constants/common";

const ChangePassword = () => {
  return (
    <Layout title="Edit Profile">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="My Account" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />

          <div className="w-full p-5">
            <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1 mt-10">
              <h4 className="uppercase">CHANGE YOUR PASSWORD</h4>
            </div>
            <Form arrayData={changePasswordFormValues} buttonText="change" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
