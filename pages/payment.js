import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AccountWizard from "@/components/Account/AccountWizard";
import CheckoutWizard from "@/components/CheckoutWizard";
import Cookies from "js-cookie";
import { Store } from "@/utils/Store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

  useEffect(() => {
    if (!shippingAddress?.address) {
      router.push("/shipping");
    }
    setSelectedPaymentMethod(paymentMethod || "");
  }, [
    paymentMethod,
    router,
    shippingAddress?.address,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error("Payment method is required");
    }
    dispatch({ type: "SAVE_PAYMENT_METHOD", payload: selectedPaymentMethod });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );
    router.push("/checkout");
  };

  return (
    <Layout title="Payment">
      <AccountWizard title="Payment Method" />
      <div className="mt-2 mx-auto max-w-screen-lg bg-white">
        <CheckoutWizard activeStep={2} />
      </div>
      <form
        onSubmit={submitHandler}
        className="mx-auto max-w-screen-md p-1 text-amazonNeutral"
      >
        {["PayPal", "Stripe", "CashOnDelivery"].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              type="radio"
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />

            <label className="p-2 font-semibold" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push("/shipping")}
            type="button"
            className="bg-amazonOrangeLite hover:bg-success duration-150 text-white px-2"
          >
            Back
          </button>
          <button className="bg-amazonBlue hover:bg-secondary duration-150 text-white px-2">
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

PaymentScreen.auth = true;
export default PaymentScreen;
