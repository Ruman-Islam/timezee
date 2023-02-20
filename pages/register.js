import React, { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const LoginScreen = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  if (status === "authenticated") {
    return (
      <Layout title="Loading">
        <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
          <AccountWizard title="Loading" />
          <div className="flex flex-col md:flex-row gap-x-5">
            <AccountSidebar />
            <div>
              <span className="text-amazonBlue">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Login">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="account login" />
        <div className="flex flex-col md:flex-row gap-x-5">
          <AccountSidebar />
          <div className="bg-white p-5 flex-grow">
            <p>
              If you already have an account with us, please login at the{" "}
              <Link
                href="/login"
                className="text-amazonBlue hover:text-amazonOrange"
              >
                login page
              </Link>
              .
            </p>

            <div>
              <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1 mt-10">
                <h4 className="uppercase text-lg">YOUR PERSONAL DETAILS</h4>
              </div>
              <form className="mt-5" onSubmit={handleSubmit(submitHandler)}>
                <div className="mb-4 flex justify-between items-center max-w-[600px]">
                  <label htmlFor="name" className="w-32 text-xs font-semibold">
                    Name
                  </label>
                  <div className="flex-grow">
                    <input
                      type="name"
                      placeholder="E-Mail Address"
                      className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
                      id="name"
                      {...register("name", {
                        required: "Please enter name",
                      })}
                    />
                    {errors.name && (
                      <div className="text-error text-xs mt-0.5 text-right">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4 flex justify-between items-center max-w-[600px]">
                  <label htmlFor="email" className="w-32 text-xs font-semibold">
                    E-Mail Address
                  </label>
                  <div className="flex-grow">
                    <input
                      type="email"
                      placeholder="E-Mail Address"
                      className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
                      id="email"
                      {...register("email", {
                        required: "Please enter email",
                        pattern: {
                          value:
                            /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
                          message: "Please enter valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="text-error text-xs mt-0.5 text-right">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4 flex justify-between items-center max-w-[600px]">
                  <label
                    htmlFor="password"
                    className="w-32 text-xs font-semibold"
                  >
                    Password
                  </label>
                  <div className="flex-grow">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full border border-thin outline-none p-2 text-xs hover:border-amazonBlue duration-150 focus:border-amazonBlue"
                      id="password"
                      {...register("password", {
                        required: "Please enter password",
                        minLength: {
                          value: 6,
                          message: "password is more than 5 chars",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="text-error text-xs mt-0.5 text-right">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm border-b border-thin pb-3">
                  <Link href="/" className="text-amazonBlue hover:text-error">
                    Forgotten Password ?
                  </Link>
                </div>
                <div className="text-center text-xs text-white uppercase bg-amazonBlue hover:bg-success duration-150 my-4">
                  <button className="h-[4vh] flex justify-center items-center gap-x-1 uppercase mx-auto w-full">
                    <span>login</span>
                    <ChevronRightIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginScreen;
