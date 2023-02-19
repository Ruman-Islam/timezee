import React, { useContext } from "react";
import db from "@/utils/db";
import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Carousel from "nuka-carousel/lib/carousel";
import CategoryCard from "@/components/Home/CategoryCard";
import Category from "@/models/Category";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import CloseIcon from "@mui/icons-material/Close";

const CartScreen = ({ categories }) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
    toast.success("Product updated in the cart");
  };

  return (
    <Layout title="Cart">
      <div className="px-3 min-h-[70vh]">
        <div className="py-2 text-white bg-white border-b border-thin">
          <h1 className="text-2xl text-amazonBlue">Shopping Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className="h-[10vh] flex flex-col justify-center items-center mx-auto mt-2">
            Cart is empty.{" "}
            <Link
              className="bg-amazonBlue text-white inline-block p-2 rounded-md"
              href="/"
            >
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="flex gap-x-5 flex-col md:flex-row">
            {/* <div className="bg-white p-1 border border-thin hidden lg:block">
              <h6 className="text-center">Offers</h6>
              <div className="w-[200px]">
                <Carousel
                  slidesToShow={1}
                  wrapAround
                  autoplay
                  enableKeyboardControls
                  transitionMode={["scroll3d"]}
                  renderCenterLeftControls={false}
                  renderCenterRightControls={false}
                  defaultControlsConfig={{
                    pagingDotsStyle: {
                      fill: "black",
                      margin: "5px",
                    },
                  }}
                >
                  {categories?.map((category, i) => {
                    return <CategoryCard key={i} category={category} />;
                  })}
                </Carousel>
              </div>
            </div> */}

            <div className="flex-grow">
              <table className="w-full">
                <thead className="bg-amazonGray uppercase text-[11px] text-amazonNeutral  border-l border-r border-thin">
                  <tr className="font-extrabold">
                    <th className="px-5 text-left">Image</th>
                    <th className="text-left">product name</th>
                    <th className="text-left hidden md:table-cell">model</th>
                    <th className="py-5 text-center">Quantity</th>
                    <th className="py-5 text-left hidden md:table-cell">
                      price
                    </th>
                    <th className="py-5 px-4 text-left">total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => {
                    return (
                      <tr
                        key={item?._id}
                        className="border border-b border-l border-r border-thin text-[12px] bg-white text-amazonNeutral"
                      >
                        <td className="p-4">
                          <Link href={`/product/${item._id}`}>
                            <Image
                              src={item.images[0]}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
                          </Link>
                        </td>
                        <td>
                          <Link
                            href={`/product/${item._id}`}
                            className="text-amazonBlue hover:text-amazonOrange leading-snug inline-block uppercase"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td className="hidden md:table-cell">4492</td>
                        <td className="p-5 flex justify-center items-center mt-1.5">
                          <select
                            className="outline-none border-t border-l border-b border-thin p-1.5"
                            defaultValue={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1}>{x + 1}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => removeItemHandler(item)}
                            className="bg-error hover:bg-secondary duration-150 px-1 text-lg"
                          >
                            <CloseIcon
                              style={{ color: "white", fontSize: "15px" }}
                            />
                          </button>
                        </td>
                        <td className="hidden md:table-cell">${item.sellPrice}</td>
                        <td className="pl-4">${item.sellPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-amazonGray p-5 text-sm leading-snug flex flex-col justify-center max-h-[400px] mt-4 md:mt-0">
              <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1 font-semibold mb-auto">
                <h2>WHAT WOULD YOU LIKE TO DO NEXT?</h2>
              </div>
              <ul className="p-3 mb-auto border border-thin bg-white">
                <li className="py-1">
                  Sub-total ({cartItems.reduce((a, b) => a + b.quantity, 0)}) :
                  ${cartItems.reduce((a, b) => a + b.quantity * b.sellPrice, 0)}
                </li>
                <li className="border-b border-thin"></li>
                <li className="py-1">
                  Total ({cartItems.reduce((a, b) => a + b.quantity, 0)}) : $
                  {cartItems.reduce((a, b) => a + b.quantity * b.sellPrice, 0)}
                </li>
              </ul>
              <div className="flex flex-col 2xl:flex-row gap-x-2 text-white justify-center">
                <Link
                  href="/"
                  className="uppercase flex gap-x-1 items-center bg-amazonBlue hover:bg-secondary duration-150 py-2 px-4  justify-center"
                >
                  <WestIcon style={{ width: "18px" }} />
                  <span className="text-xs">continue shopping</span>
                </Link>
                <button
                  onClick={() => router.push("/login?redirect=/shipping")}
                  className="uppercase flex gap-x-1 items-center bg-success hover:bg-amazonOrange duration-150 py-2 px-4 justify-center"
                >
                  <span className="text-xs">checkout</span>
                  <EastIcon style={{ width: "18px" }} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const getServerSideProps = async () => {
  await db.connect();
  const categories = await Category.find().lean();
  await db.disconnect();
  return {
    props: {
      categories: categories.map(db.convertDocToObj),
    },
  };
};

export { getServerSideProps };
export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
