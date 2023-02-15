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
        <div className="text-accent uppercase text-sm">
          <div className="bg-error flex justify-between items-center text-base">
            <div className="p-2 text-lg font-semibold">Your cart</div>
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
                      className="grid grid-cols-4 border-thin border items-center mb-1 p-1 rounded"
                    >
                      <div className="col-span-1 w-16">
                        <Image
                          src={item?.images[0]}
                          alt={item?.name}
                          width={300}
                          height={300}
                        />
                      </div>
                      <div className="text-xs col-span-2 flex items-center">
                        <p>{item?.name}</p>
                      </div>
                      <div className="flex flex-col items-center col-span-1">
                        <span> &#215;{item?.quantity}</span>
                        <span>${item?.price}</span>
                        <div className="flex justify-center items-center mt-1.5">
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
                            className="bg-error hover:bg-secondary duration-150 px-2  text-white border border-thin"
                          >
                            <ClearIcon className="w-4" />
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
                      {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
                    </span>
                  </p>
                  <p className="text-xs text-right font-semibold">
                    <span>Total :</span>
                    <span className="ml-2">
                      ${" "}
                      {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
                    </span>
                  </p>
                </div>
                <div className="w-full text-base mt-4 flex justify-center gap-x-2">
                  <Link
                    href="/cart"
                    className="p-3 bg-accent text-[12px] uppercase"
                  >
                    view cart
                  </Link>
                  <button
                    onClick={() => router.push("login?redirect=/shipping")}
                    className="p-3 bg-accent text-[12px] uppercase"
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
