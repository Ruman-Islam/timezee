import React, { useContext } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";
import { Store } from "@/utils/Store";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";

const MobileCartDrawer = ({ isCartOpen, toggleCartDrawer }) => {
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
    <>
      <Drawer
        open={isCartOpen}
        onClose={toggleCartDrawer}
        direction="right"
        duration={300}
        overlayOpacity={0.5}
        lockBackgroundScroll
        size={320}
      >
        <div className="text-amazonAccent uppercase text-sm">
          <div className="bg-amazonNeutral flex justify-between items-center text-base">
            <div className="pl-5 py-2 text-lg font-semibold flex gap-x-2 items-center">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="white"
              >
                <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
              </svg>
              <span> Your cart</span>
            </div>
            <button onClick={toggleCartDrawer} className="px-3 py-2">
              <ClearIcon className="mx-auto" />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <div className="mx-auto h-[100vh] flex flex-col justify-center text-center">
              Cart is empty.
              <Link
                className="bg-primary text-base text-center mt-5 p-2 w-fit mx-auto"
                href="/"
              >
                Go shopping
              </Link>
            </div>
          ) : (
            <div className="h-[93vh] flex flex-col justify-between">
              <ul className="pl-1 py-0.5 h-fit overflow-y-scroll">
                {cartItems?.map((item) => {
                  return (
                    <li
                      key={item?._id}
                      className="grid grid-cols-4 border-thin border items-center mb-1 p-1 rounded text-amazonNeutral"
                    >
                      <div className="col-span-1 w-16">
                        <Link href={`/product/${item._id}`}>
                          <Image
                            src={item.images[0]}
                            alt={item.name}
                            width={40}
                            height={40}
                          />
                        </Link>
                      </div>
                      <div className="text-xs col-span-2 flex items-center">
                        <Link
                          href={`/product/${item._id}`}
                          className="text-amazonBlue hover:text-amazonOrange leading-snug inline-block uppercase"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <div className="flex flex-col items-center col-span-1">
                        {/* <span> &#215;{item?.quantity}</span> */}
                        <span>${item?.sellPrice}</span>
                        <div className="flex justify-center items-center mt-1.5">
                          <select
                            className="outline-none border-t border-l border-b border-thin p-0.5"
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
                            className="bg-error hover:bg-secondary duration-150 px-1 text-white border border-thin"
                          >
                            <ClearIcon className="w-3 h-3 mb-1" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="text-black mt-5 h-[150px] border-t border-[#e73d50] p-2">
                <div>
                  <p className="text-xs text-right font-semibold">
                    <span>Sub-Total :</span>
                    <span className="ml-2">
                      ${" "}
                      {cartItems.reduce(
                        (a, b) => a + b.quantity * b.sellPrice,
                        0
                      )}
                    </span>
                  </p>
                  <p className="text-xs text-right font-semibold">
                    <span>Total :</span>
                    <span className="ml-2">
                      ${" "}
                      {cartItems.reduce(
                        (a, b) => a + b.quantity * b.sellPrice,
                        0
                      )}
                    </span>
                  </p>
                </div>
                <div className="w-full text-base mt-4 flex justify-center gap-x-2">
                  <Link
                    href="/cart"
                    className="p-3 bg-amazonNeutral hover:bg-amazonBlue duration-200 text-[12px] uppercase"
                  >
                    view cart
                  </Link>
                  <button
                    onClick={() => router.push("login?redirect=/shipping")}
                    className="p-3 bg-amazonNeutral hover:bg-amazonBlue duration-200 text-[12px] uppercase"
                  >
                    checkout
                  </button>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default MobileCartDrawer;
