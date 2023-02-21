import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import Link from "next/link";

const AddressBookScreen = () => {
  return (
    <Layout title="Address Book">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Address Book" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="flex-grow">
            <div>
              <div className="border border-t-0 border-thin w-full flex justify-between items-center bg-white">
                <div className="flex-grow p-2 text-accent text-sm">
                  <p>Ruman Islam</p>
                  <p>Pingdash Technology</p>
                  <p>3/1, F-Block, Road-8, Rampura Banasree</p>
                  <p>Dhaka 1219</p>
                  <p>Dhaka (Metro)</p>
                  <p>Bangladesh</p>
                </div>
                <div className="p-3 flex gap-x-2 uppercase text-xs">
                  <Link
                    href="/account/address/edit"
                    className="text-white bg-accent hover:bg-primary duration-150 px-5 py-1"
                  >
                    Edit
                  </Link>
                  <button className="text-white bg-error hover:bg-secondary duration-150 px-5 py-1 uppercase">
                    delete
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <div>
                <Link
                  href="/account/address/add"
                  className="text-white bg-accent hover:bg-primary duration-150 inline-block px-5 py-1 uppercase text-xs"
                >
                  new address
                </Link>
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
