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

  // console.log(data)

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
        payload: { ...data, quantity: quantity },
      });
      toast.success("Product added to the cart");
    }
  };

  return (
    <Layout title={title}>
      <div className="max-w-screen-xl mx-auto">
        <AccountWizard title={title} />
        <div className="flex">
          {/* <div className="mt-4 border bg-white border-thin w-[270px]">
            Under construction
          </div> */}
          <div>
            {data?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
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
      "https://timezee-server.vercel.app/api/v1/public/get_featured_products"
    );
    const featuredProductsData = await featuredProductsRes.json();
    products = featuredProductsData;
  } else if (slug === "latest") {
    const latestProductsRes = await fetch(
      "https://timezee-server.vercel.app/api/v1/public/get_all_products"
    );
    const latestProductsData = await latestProductsRes.json();
    products = latestProductsData;
  } else {
    const latestProductsRes = await fetch(
      `https://timezee-server.vercel.app/api/v1/public/get_products?slug=${slug}`
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
