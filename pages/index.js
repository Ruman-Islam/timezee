import Head from "next/head";
import Layout from "@/components/Layout";
import db from "@/utils/db";
import Product from "@/models/Product";
import Category from "@/models/Category";
import Hero from "@/components/Home/Hero";
import InfoBlock from "@/components/Home/InfoBlock";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import LatestProducts from "@/components/Home/LatestProducts";
import YouTubeLink from "@/components/Home/YouTubeLink";
import Categories from "@/components/Home/Categories";
import { useContext } from "react";
import { Store } from "@/utils/Store";
import axios from "axios";
import { toast } from "react-toastify";

const HomeScreen = ({ latestProducts, categories, featuredProducts }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Home">
        <Hero categories={categories}/>
        <InfoBlock />
        <FeaturedProducts
          products={featuredProducts}
          addToCartHandler={addToCartHandler}
        />
        <LatestProducts
          products={latestProducts}
          addToCartHandler={addToCartHandler}
        />
        <YouTubeLink />
        <Categories categories={categories} />
      </Layout>
    </>
  );
};

const getServerSideProps = async () => {
  await db.connect();
  const categories = await Category.find().lean();
  const latestProducts = await Product.find().sort({ createdAt: -1 }).lean();
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      latestProducts: latestProducts.map(db.convertDocToObj),
      categories: categories.map(db.convertDocToObj),
    },
  };
};

export { getServerSideProps };
export default HomeScreen;