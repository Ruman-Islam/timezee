import AccountWizard from "@/components/Account/AccountWizard";
import ProductCard from "@/components/Home/ProductCard";
import Layout from "@/components/Layout";
import { useContext } from "react";
import { Store } from "@/utils/Store";
import axios from "axios";
import { toast } from "react-toastify";

const ProductsScreen = ({ products: { data }, title }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {
      data: { data },
    } = await axios.get(
      `http://localhost:7000/api/v1/public/get_single_product?productId=${product._id}`
    );

    if (data.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    } else {
      dispatch({
        type: "CART_ADD_ITEM",
        payload: { ...data, quantity: quantity },
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
            {data?.length > 0 ? (
              <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
                {data?.map((product) => {
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
  let products;

  if (slug === "featured") {
    const featuredProductsRes = await fetch(
      "http://localhost:7000/api/v1/public/get_featured_products"
    );
    const featuredProductsData = await featuredProductsRes.json();
    products = featuredProductsData;
  } else if (slug === "latest") {
    const latestProductsRes = await fetch(
      "http://localhost:7000/api/v1/public/get_all_products"
    );
    const latestProductsData = await latestProductsRes.json();
    products = latestProductsData;
  } else {
    const latestProductsRes = await fetch(
      `http://localhost:7000/api/v1/public/get_products?slug=${slug}`
    );
    const latestProductsData = await latestProductsRes.json();
    products = latestProductsData;
  }

  return {
    props: {
      title: slug,
      products: products,
    },
  };
};

export { getServerSideProps };
export default ProductsScreen;
