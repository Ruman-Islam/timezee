import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import { accountData } from "@/constants/common";
import { useSession } from "next-auth/react";
import Link from "next/link";

const MyAccountScreen = () => {
  const { status, data: session } = useSession();

  return (
    <Layout title="My Account">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="My Account" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="w-full p-5 grid grid-cols-3 gap-3">
            {accountData.map((item, index) =>
              item.type > 0 ? (
                <Link
                  href={`${item.url}${session?.user?._id}`}
                  key={index}
                  className="border border-thin py-5 flex flex-col gap-2 items-center justify-center h-fit col-span-1 text-amazonNeutral bg-white hover:shadow-md duration-200"
                >
                  {item.Icon}
                  <span className="font-semibold">{item.text}</span>
                </Link>
              ) : (
                <Link
                  href={`${item.url}`}
                  key={index}
                  className="border border-thin py-5 flex flex-col gap-2 items-center justify-center h-fit col-span-1 text-amazonNeutral bg-white hover:shadow-md duration-200"
                >
                  {item.Icon}
                  <span className="font-semibold">{item.text}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

MyAccountScreen.auth = true;
export default MyAccountScreen;
