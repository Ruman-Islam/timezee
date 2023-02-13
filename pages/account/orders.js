import AccountSidebar from "@/components/Account/AccountSidebar";
import Layout from "@/components/Layout";
import React from "react";

const OrderScreen = () => {
  return (
    <Layout title="Order History">
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is order page</div>
      </div>
    </Layout>
  );
};

export default OrderScreen;
