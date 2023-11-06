import React, { useEffect } from "react";
import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import { BsPencilSquare, BsCardChecklist, BsListCheck } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlinePayment, MdEmail } from "react-icons/md";

const accountData = [
  { text: "Edit account", Icon: <BsPencilSquare size={30} /> },
  { text: "Change password", Icon: <AiFillLock size={30} /> },
  { text: "Modify address book", Icon: <RiContactsBook2Fill size={30} /> },
  { text: "Order history", Icon: <BsCardChecklist size={30} /> },
  { text: "View return", Icon: <GiReturnArrow size={30} /> },
  { text: "Payments", Icon: <MdOutlinePayment size={30} /> },
  { text: "Wishlist", Icon: <BsListCheck size={30} /> },
  { text: "Transaction", Icon: <GrTransaction size={30} /> },
  { text: "Newsletter", Icon: <MdEmail size={30} /> },
];

const MyAccountScreen = () => {
  return (
    <Layout title="My Account">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="My Account" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="w-full p-5 grid grid-cols-3 gap-3">
            {accountData.map((item, index) => (
              <div
                key={index}
                className="border border-thin py-5 flex flex-col gap-2 items-center justify-center h-fit col-span-1 text-amazonNeutral bg-white hover:shadow-md duration-200"
              >
                {item.Icon}
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

MyAccountScreen.auth = true;
export default MyAccountScreen;
