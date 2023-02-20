import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { getError } from "../utils/error";
import { Store } from "../utils/Store";
import dynamic from "next/dynamic";
import AccountWizard from "@/components/Account/AccountWizard";

const CheckoutScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.sellPrice, 0)
  ); // 123.4567 => 123.46

  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/orders", {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: "CART_CLEAR_ITEMS" });
      Cookies.set(
        "cart",
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Place Order">
      <AccountWizard title="Checkout" />
      <div className="mt-2 mx-auto max-w-screen-2xl bg-white">
        <CheckoutWizard activeStep={3} />
      </div>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-2xl flex flex-col lg:flex-row justify-between bg-white gap-x-2 text-amazonNeutral px-2">
          <div className="overflow-x-auto md:col-span-3 flex-grow">
            <div className="p-5 mb-5 shadow-md rounded-lg border border-thin hover:bg-amazonGray">
              <h2 className="mb-2 text-amazonBlue">Shipping Address</h2>
              <div className="text-sm mb-2">
                {shippingAddress?.fullName}, {shippingAddress?.address},{" "}
                {shippingAddress?.city}, {shippingAddress?.postalCode},{" "}
                {shippingAddress?.country}
              </div>
              <div>
                <Link href="/shipping" className="text-error">
                  Edit
                </Link>
              </div>
            </div>
            <div className="p-5 mb-5 shadow-md rounded-lg border border-thin hover:bg-amazonGray">
              <h2 className="mb-2 text-amazonBlue">Payment Method</h2>
              <div className="text-sm mb-2">{paymentMethod}</div>
              <div>
                <Link href="/payment" className="text-error">
                  Edit
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto p-5 mb-5 shadow-md rounded-lg border border-thin">
              {/* <h2 className="text-amazonBlue">Order Items</h2> */}
              <table className="min-w-full mb-2">
                <thead className="border-b border-x-amazonOrange text-sm">
                  <tr>
                    <th className="text-left">Item</th>
                    <th className="text-right">Quantity</th>
                    <th className="text-right  p-3">Price</th>
                    <th className="text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b border-thin hover:bg-amazonGray"
                    >
                      <td>
                        <Link href={`/product/${item._id}`}>
                          <div className="flex items-center">
                            <Image
                              src={item.images[0]}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
                            &nbsp;
                            <p className="text-xs text-amazonBlue uppercase">
                              {item.name}
                            </p>
                          </div>
                        </Link>
                      </td>
                      <td className="p-5 text-right">{item.quantity}</td>
                      <td className="p-5 text-right">${item.sellPrice}</td>
                      <td className="p-5 text-right">
                        ${item.quantity * item.sellPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link href="/cart" className="text-error">
                  Edit
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="shadow-md p-5 rounded-lg">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <button
                    disabled={loading}
                    onClick={placeOrderHandler}
                    className="bg-warning hover:bg-amazonOrange duration-150 py-1 rounded-md font-bold w-full"
                  >
                    {loading ? "Loading..." : "Place Order"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

CheckoutScreen.auth = true;
export default dynamic(() => Promise.resolve(CheckoutScreen), { ssr: false });
