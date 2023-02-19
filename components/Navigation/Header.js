import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import LogoMain from "../../public/images/logo_1.webp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import PersonIcon from "@mui/icons-material/Person";
import LeftMobileDrawer from "./LeftMobileDrawer";
import MobileCartDrawer from "./MobileCartDrawer";
import { Store } from "@/utils/Store";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const Header = () => {
  const { status, data: session } = useSession();
  const { state } = useContext(Store);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cart,
    cart: { cartItems },
  } = state;

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cart.cartItems]);

  const toggleNavDrawer = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const toggleCartDrawer = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full relative z-50 bg-amazonAccent text-white">
      <nav className="w-full lg:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <div>
          <div>
            <div className="flex flex-wrap gap-x-5 items-center justify-between px-3">
              <div className="flex items-center my-2.5">
                <div className="lg:hidden">
                  <MenuIcon onClick={toggleNavDrawer} className="w-10 h-10" />
                </div>
                <Link href="/">
                  <Image
                    width={600}
                    height={600}
                    src={LogoMain}
                    alt="Electronic Bd"
                    className="w-[130px] lg:w-[180px]"
                  />
                </Link>
              </div>
              <div
                className={`relative hidden lg:block flex-grow shadow-xl duration-300 max-w-7xl`}
              >
                <Search />
                <div className="bg-amazonOrangeLite absolute top-0 bottom-0 -right-0.5 text-amazonNeutral flex items-center px-3 rounded-r cursor-pointer">
                  <SearchIcon />
                </div>
              </div>
              <div className="mx-1 flex gap-x-2 items-center lg:items-end justify-center">
                <div className="hidden lg:block hover:text-amazonOrange duration-200">
                  <Link href="/login?redirect=/account">
                    <div className="text-xs">
                      {status === "loading" ? (
                        "Loading"
                      ) : session?.user ? (
                        <span>Hello, {session?.user?.name}</span>
                      ) : (
                        <span>Hello, Sign in</span>
                      )}
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      Account 
                    </div>
                  </Link>
                </div>
                <div className="block lg:hidden">
                  <Link href="/login?redirect=/account">
                    <div className="text-xs">
                      {status === "loading" ? (
                        "Loading"
                      ) : session?.user ? (
                        <span>
                          {session?.user?.name} <PersonIcon />
                        </span>
                      ) : (
                        <span>
                          Sign in <PersonIcon />
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/cart" className="hidden lg:flex items-end">
                    <div className="relative">
                      <svg
                        width="42"
                        height="42"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        fill="white"
                      >
                        <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
                      </svg>
                      <div className="absolute top-4 right-5 flex items-center justify-center text-xs font-bold text-amazonOrange">
                        {cartItemsCount}
                      </div>
                    </div>
                    <div className="text-xs font-bold">
                      {"$ "}
                      <span>
                        {cartItems.reduce(
                          (a, b) => a + b.quantity * b.sellPrice,
                          0
                        )}
                      </span>
                    </div>
                  </Link>
                  <div
                    onClick={toggleCartDrawer}
                    className="flex items-end lg:hidden cursor-pointer"
                  >
                    <div className="relative">
                      <svg
                        width="42"
                        height="42"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        fill="white"
                      >
                        <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
                      </svg>
                      <div className="absolute top-4 right-5 flex items-center justify-center text-xs font-bold text-amazonOrange">
                        {cartItemsCount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`relative block lg:hidden flex-grow shadow-xl duration-300 mx-3 my-2`}
            >
              <Search />
              <div className="bg-amazonOrangeLite absolute top-0 bottom-0 -right-0.5 flex items-center px-3 rounded-r">
                <SearchIcon />
              </div>
            </div>
            <div className="hidden lg:flex justify-between items-center px-3 py-1.5">
              <button
                className={`group flex items-center font-extrabold hover:text-amazonOrange duration-150`}
                onClick={toggleNavDrawer}
              >
                <MenuIcon className="w-6" />
                All
              </button>
              <div className="flex items-center gap-x-5 text-sm">
                <Link
                  href="/delivery-info"
                  className="flex items-center gap-x-1 hover:text-amazonOrange duration-150 font-semibold"
                >
                  <LocalShippingIcon />
                  Delivery Information
                </Link>
                <Link
                  href="/delivery-info"
                  className="flex items-center gap-x-1 hover:text-amazonOrange duration-150 font-semibold"
                >
                  <HelpOutlineIcon />
                  How to Buy?
                </Link>
                <Link
                  href="/delivery-info"
                  className="flex items-center gap-x-1 hover:text-amazonOrange duration-150 font-semibold"
                >
                  <FavoriteIcon />
                  Wishlist
                </Link>
                <Link
                  href="/delivery-info"
                  className="flex items-center gap-x-1 hover:text-amazonOrange duration-150 font-semibold"
                >
                  <CompareArrowsIcon />
                  Compare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <LeftMobileDrawer
        isNavOpen={isNavOpen}
        toggleNavDrawer={toggleNavDrawer}
      />
      <MobileCartDrawer
        isCartOpen={isCartOpen}
        toggleCartDrawer={toggleCartDrawer}
      />
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
