import { useContext } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/Hero";
import InfoBlock from "@/components/Home/InfoBlock";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import LatestProducts from "@/components/Home/LatestProducts";
import YouTubeLink from "@/components/Home/YouTubeLink";
import Categories from "@/components/Home/Categories";
import { Store } from "@/utils/Store";
import axios from "axios";
import { toast } from "react-toastify";

const HomeScreen = ({ categories, featuredProducts, latestProducts }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {
      data: { data },
    } = await axios.get(
      `https://timezee-server.vercel.app/api/v1/public/get_single_product?productId=${product._id}`
    );

    if (data.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    } else {
      dispatch({
        type: "CART_ADD_ITEM",
        payload: { ...product, quantity: quantity },
      });
      toast.success("Product added to the cart");
    }
  };

  return (
    <>
      <Layout title="Home">
        <Hero />
        <InfoBlock />
        <div className="max-w-screen-xl mx-auto">
          <FeaturedProducts
            products={featuredProducts}
            addToCartHandler={addToCartHandler}
          />
          <LatestProducts
            products={latestProducts}
            addToCartHandler={addToCartHandler}
          />
        </div>
        <YouTubeLink />
        <Categories categories={categories} />
      </Layout>
    </>
  );
};

const getStaticProps = async () => {
  const featuredProductsRes = await fetch(
    "https://timezee-server.vercel.app/api/v1/public/get_featured_products"
  );
  const featuredProductsData = await featuredProductsRes.json();

  const categoriesRes = await fetch(
    "https://timezee-server.vercel.app/api/v1/public/get_categories"
  );
  const categoriesData = await categoriesRes.json();

  return {
    props: {
      latestProducts: featuredProductsData,
      featuredProducts: featuredProductsData,
      categories: categoriesData,
    },
  };
};

export { getStaticProps };
export default HomeScreen;
