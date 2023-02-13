import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const WishlistScreen = () => {
  return (
    <Layout title="Wishlist">
       <AccountWizard title="Wishlist" />
      <div className="flex gap-x-5">
        <AccountSidebar />
        <div>This is order page</div>
      </div>
    </Layout>
  );
};

WishlistScreen.auth = true;
export default WishlistScreen;