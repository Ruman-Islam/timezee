import { useEffect } from "react";
import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import AddressCard from "@/components/Account/AddressCard";
import { address } from "@/constants/common";
import CustomButton from "@/components/UI/Button";
import { toast } from "react-toastify";

const AddressBookScreen = () => {
  const submitHandler = async () => {
    return toast.error("CRUD operation disabled!");
  };

  return (
    <Layout title="Address Book">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Address Book" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="w-full p-4">
            <div>
              {address.map((item, index) => (
                <AddressCard key={index} data={item} />
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <div>
                <CustomButton
                  onClick={submitHandler}
                  className="text-white bg-accent hover:bg-primary duration-150 inline-block px-5 py-1 uppercase text-xs"
                >
                  new address
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

AddressBookScreen.auth = true;
export default AddressBookScreen;
