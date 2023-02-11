import React, { useContext } from "react";
import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CartScreen = () => {
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
        <div className="py-2 bg-base border-b border-thin">
          <h1 className="text-2xl text-accent">Shopping Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className=" mx-auto">
            Cart is empty.{" "}
            <Link className="bg-primary" href="/">
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="flex gap-x-5 flex-col md:flex-row">
            <div className="w-[250px] border-r border-thin hidden lg:block">
              Slider
            </div>
            <div className="flex-grow border border-thin">
              <table className="w-full">
                <thead className="bg-grayBackground uppercase text-[11px] text-accent border-t border-l border-r border-thin">
                  <tr className="font-extrabold">
                    <th className="px-5 text-left">Image</th>
                    <th className="text-left">product name</th>
                    <th className="text-left hidden md:table-cell">model</th>
                    <th className="py-5 text-center">Quantity</th>
                    <th className="py-5 text-left hidden md:table-cell">price</th>
                    <th className="py-5 px-4 text-left">total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => {
                    return (
                      <tr
                        key={item.slug}
                        className="border border-b border-l border-r border-thin text-[12px]"
                      >
                        <td className="p-4">
                          <Link href={`/product/${item.slug}`}>
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
                            href={`/product/${item.slug}`}
                            className="text-primary hover:text-error leading-snug inline-block"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td className="hidden md:table-cell">4492</td>
                        <td className="p-5 flex justify-center items-center mt-1.5">
                          <select
                            className="outline-none border-t border-l border-b border-thin p-1"
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
                            className="bg-error hover:bg-secondary duration-150 px-2 text-base"
                          >
                            <FontAwesomeIcon icon={faXmark} width={19} />
                          </button>
                        </td>
                        <td className="hidden md:table-cell">${item.price}</td>
                        <td className="pl-4">${item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
            </div>
            <div className="bg-grayBackground p-5 text-[14px] leading-snug flex flex-col justify-center max-h-[400px]">
              <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-error pb-1 font-semibold mb-auto">
                <h2>WHAT WOULD YOU LIKE TO DO NEXT?</h2>
              </div>
              <ul className="p-3 mb-auto border border-thin bg-base">
                <li className="py-1">
                  Sub-total ({cartItems.reduce((a, b) => a + b.quantity, 0)}) :
                  ${cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
                </li>
                <li className="border-b border-thin"></li>
                <li className="py-1">
                  Total ({cartItems.reduce((a, b) => a + b.quantity, 0)}) : $
                  {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
                </li>
              </ul>
              <div className="flex flex-col 2xl:flex-row gap-x-2 text-base justify-center">
                <Link
                  href="/"
                  className="uppercase flex gap-x-1 items-center bg-primary hover:bg-secondary duration-150 py-1 px-4 text-[10px] justify-center"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>continue shopping</span>
                </Link>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="uppercase flex gap-x-1 items-center bg-success hover:bg-error duration-150 py-1 px-4 text-[10px] justify-center"
                >
                  <span>checkout</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
