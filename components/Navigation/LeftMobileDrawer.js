import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { Store } from "@/utils/Store";

const LeftMobileDrawer = ({ isNavOpen, toggleNavDrawer }) => {
  const { dispatch } = useContext(Store);
  const { status, data: session } = useSession();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/public/get_categories")
      .then((res) => res.json())
      .then(({ data }) => {
        setCategories(data);
      });
    fetch("http://localhost:7000/api/v1/public/get_brands")
      .then((res) => res.json())
      .then(({ data }) => {
        setBrands(data);
      });
  }, []);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <Drawer
        open={isNavOpen}
        onClose={toggleNavDrawer}
        direction="left"
        duration={300}
        overlayOpacity={0.7}
        lockBackgroundScroll
        size={300}
      >
        <div className="relative">
          <div className="text-amazonAccent text-sm">
            <div className="bg-amazonNeutral flex justify-between items-center text-base">
              <div className="py-3 pl-5 font-semibold flex items-center gap-x-1 text-lg">
                <AccountCircleIcon />
                Hello, {session?.user ? session?.user?.name : "Sign in"}
              </div>
            </div>

            <div className="py-2 border-b border-thin">
              <div>
                <div className="pl-5">
                  <h3 className="text-amazonNeutral font-semibold text-lg">
                    Brands
                  </h3>
                </div>
                <ul className="max-h-[250px] overflow-y-auto">
                  {brands?.map(({ name }, i) => {
                    return (
                      <Link
                        key={i}
                        className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                        href={`/products/${name}`}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="py-2 border-b border-thin">
              <div>
                <div className="pl-5">
                  <h3 className="text-amazonNeutral font-semibold text-lg">
                    Categories
                  </h3>
                </div>
                <ul className="max-h-[250px] overflow-y-auto">
                  {categories?.map(({ name }, i) => {
                    return (
                      <Link
                        key={i}
                        className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                        href={`/products/${name}`}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="py-2 border-b border-thin">
              <div>
                <div className="pl-5">
                  <h3 className="text-amazonNeutral font-semibold text-lg">
                    Account & Settings
                  </h3>
                </div>
                <ul className="max-h-[250px] overflow-y-auto">
                  <li>
                    <Link
                      href="/login?redirect=/account"
                      className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                    >
                      Your Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login?redirect=/account"
                      className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <li>
                      <Link
                        href="/login?redirect=/account"
                        className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                      >
                        English
                      </Link>
                    </li>
                    <Link
                      href="/login?redirect=/account"
                      className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                    >
                      Help Center
                    </Link>
                  </li>
                  {session?.user ? (
                    <li className="py-1 lg:py-2">
                      <button
                        onClick={() => logoutClickHandler()}
                        className="flex gap-x-0 lg:gap-x-1 items-center text-sm font-semibold text-error hover:text-amazonOrange duration-150 px-5"
                      >
                        <LogoutIcon />
                        <span>Logout</span>
                      </button>
                    </li>
                  ) : (
                    <li className="py-1 lg:py-2">
                      <Link
                        href="/login?redirect=/account"
                        className="flex gap-x-0 lg:gap-x-1 items-center text-sm font-semibold text-amazonBlue hover:text-amazonOrange duration-150 px-4"
                      >
                        <LoginIcon />
                        <span>Sign In</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-2 -right-10">
            <button onClick={toggleNavDrawer} className="text-white">
              <ClearIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LeftMobileDrawer;
