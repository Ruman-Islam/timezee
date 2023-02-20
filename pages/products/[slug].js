import AccountWizard from "@/components/Account/AccountWizard";
import ProductCard from "@/components/Home/ProductCard";
import Layout from "@/components/Layout";
import Product from "@/models/Product";
import db from "@/utils/db";
import { useContext } from "react";
import { Store } from "@/utils/Store";
import axios from "axios";
import { toast } from "react-toastify";

const ProductsScreen = ({ products, title }) => {
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
    <Layout title={title}>
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title={title} />
        <div className="flex">
          {/* <div className="border-r border-thin w-[150px]">filter</div> */}
          <div className="flex-grow">
            {products?.length > 0 ? (
              <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
                {products?.map((product) => {
                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      addToCartHandler={addToCartHandler}
                    />
                  );
                })}
              </div>
            ) : (
              <div className=" flex flex-col justify-center items-center text-accent h-[20vh]">
                No products
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  let products = [];

  await db.connect();
  if (slug === "featured") {
    products = await Product.find({ isFeatured: true }).lean();
  } else if (slug === "latest") {
    products = await Product.find().sort({ createdAt: -1 }).lean();
  } else {
    products = await Product.find({
      $or: [{ brand: slug }, { category: slug }],
    }).lean();
  }
  await db.disconnect();

  return {
    props: {
      title: slug,
      //   categories: categories.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
    },
  };
};

export { getServerSideProps };
export default ProductsScreen;
