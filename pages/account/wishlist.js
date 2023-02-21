import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";

const WishlistScreen = () => {
  return (
    <Layout title="Wishlist">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Wishlist" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div>This is wish page</div>
        </div>
      </div>
    </Layout>
  );
};

WishlistScreen.auth = true;
export default WishlistScreen;
