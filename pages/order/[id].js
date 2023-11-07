import React, { useEffect, useReducer } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { getError } from "@/utils/error";
import AccountWizard from "@/components/Account/AccountWizard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, order: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

const OrderScreen = () => {
  const { query } = useRouter();
  const orderId = query.id;

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/${orderId}`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, orderId]);

  // const {
  //   shippingAddress,
  //   paymentMethod,
  //   orderItems,
  //   itemsPrice,
  //   taxPrice,
  //   shippingPrice,
  //   totalPrice,
  //   isPaid,
  //   paidAt,
  //   isDelivered,
  //   deliveredAt,
  // } = order;

  return (
    <Layout title={`Order ${orderId}`}>
      {loading ? (
        <div className="max-w-screen-xl mx-auto">Loading...</div>
      ) : error ? (
        <div className="text-error">{error}</div>
      ) : (
        <div className="max-w-screen-xl mx-auto">
          <AccountWizard title="YOUR ORDER HAS BEEN RECEIVED!" />
          <div className="h-[85vh] flex flex-col justify-center max-w-[600px] mx-auto text-center">
            <div className="leading-loose mt-20 m-auto">
              <CheckCircleIcon className="text-success w-16 h-16" />
              <h2>Thanks for shopping with us online!</h2>
              <h2>Your order ID is: {orderId}</h2>
              <h2>
                You will received an order confirmation email with details of
                your order
              </h2>
              <Link
                className="bg-amazonOrange text-white inline-block px-3 py-1 rounded-md"
                href="/"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

OrderScreen.auth = true;
export default OrderScreen;
