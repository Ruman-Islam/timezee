import Layout from "@/components/Layout";

const ShippingScreen = () => {
  return <Layout title="Shipping">This is shipping page protected</Layout>;
};

ShippingScreen.auth = true;
export default ShippingScreen;