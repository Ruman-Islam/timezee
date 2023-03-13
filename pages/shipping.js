import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";
import AccountWizard from "@/components/Account/AccountWizard";

const ShippingScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();


  useEffect(() => {
    setValue("fullName", shippingAddress?.fullName);
    setValue("company", shippingAddress?.company);
    setValue("address", shippingAddress?.address);
    setValue("city", shippingAddress?.city);
    setValue("postalCode", shippingAddress?.postalCode);
    setValue("country", shippingAddress?.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({
    fullName,
    company,
    address,
    city,
    postalCode,
    country,
  }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, company, address, city, postalCode, country },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          company,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping">
      <AccountWizard title="Shipping Address" />
      <div className="mt-2 mx-auto max-w-screen-lg bg-white">
        <CheckoutWizard activeStep={1} />
      </div>
      <form
        className="mx-auto max-w-screen-md text-amazonNeutral bg-white p-1"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="fullName" className="w-32 text-xs font-semibold">
            Full Name*
          </label>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
              id="fullName"
              {...register("fullName", {
                required: "Please enter full name",
              })}
            />
            {errors.fullName && (
              <div className="text-error text-xs mt-0.5 text-right">
                {errors.fullName.message}
              </div>
            )}
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="company" className="w-32 text-xs font-semibold">
            Company
          </label>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
              id="company"
              {...register("company")}
            />
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="address" className="w-32 text-xs font-semibold">
            Address*
          </label>
          <div className="flex-grow">
            <textarea
              type="text"
              placeholder="Address"
              className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
              id="address"
              {...register("address", {
                required: "Please enter address",
                minLength: {
                  value: 3,
                  message: "Address is more than 2 chars",
                },
              })}
            />
            {errors.address && (
              <div className="text-error text-xs mt-0.5 text-right">
                {errors.address.message}
              </div>
            )}
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="city" className="w-32 text-xs font-semibold">
            City*
          </label>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="City"
              className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
              id="city"
              {...register("city", {
                required: "Please enter city name",
              })}
            />
            {errors.city && (
              <div className="text-error text-xs mt-0.5 text-right">
                {errors.city.message}
              </div>
            )}
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="postalCode" className="w-32 text-xs font-semibold">
            Postal Code
          </label>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
              id="postalCode"
              {...register("postalCode")}
            />
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label className="w-32 text-xs font-semibold">Country*</label>
          <div className="flex-grow">
            <select
              className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
              defaultValue=""
              {...register("country", {
                required: "Please select country",
              })}
            >
              <option value="">--- Please Select ---</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>
            {errors.country && (
              <div className="text-error text-xs mt-0.5 text-right">
                {errors.country.message}
              </div>
            )}
          </div>
        </div>

        <div className="mb-4 flex justify-end">
          <button className="bg-amazonBlue hover:bg-secondary duration-150 text-white px-4">
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

ShippingScreen.auth = true;
export default ShippingScreen;
