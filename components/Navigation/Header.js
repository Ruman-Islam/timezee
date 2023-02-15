import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import useNav from "@/hooks/useNav";
import LogoMain from "../../public/images/Logo-main.webp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LeftMobileDrawer from "./LeftMobileDrawer";
import MobileCartDrawer from "./MobileCartDrawer";
import { Store } from "@/utils/Store";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import axios from "axios";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { navbar } = useNav();
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

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/categories/");
      setCategories(data);
    })();
  }, []);

  const toggleNavDrawer = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  const toggleCartDrawer = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full mb-10 lg:mb-1 relative z-50 text-base">
      <nav
        className={`flex items-center px-3 py-2 left-0 right-0 ${
          navbar
            ? "fixed h-[6vh] bg-accent justify-center"
            : "bg-neutral justify-center lg:justify-between"
        }`}
      >
        <span className="text-xs invisible">..</span>
        <span className="text-[12px] font-semibold flex justify-between items-center">
          <small className="white">
            SHOP: 01641757175, DELIVERY: 01919646416
          </small>
        </span>
        <span className="text-xs font-thin ml-2">ENGLISH</span>
      </nav>
      <nav className="bg-accent fixed lg:static top-0 left-0 right-0">
        <div>
          <div>
            <div className="flex items-center justify-between px-3 py-0 lg:py-2">
              <div className="flex items-center">
                <div className="lg:hidden">
                  <MenuIcon onClick={toggleNavDrawer} />
                </div>
                <Link href="/">
                  <>
                    <Image
                      width={200}
                      height={200}
                      src={LogoMain}
                      alt="Electronic Bd"
                    />
                  </>
                </Link>
              </div>
              <div
                className={`flex-grow shadow-xl duration-300 ${
                  navbar
                    ? "fixed left-0 right-0 lg:left-64 lg:right-52 top-16 lg:top-2 mx-auto block z-10"
                    : "relative hidden lg:block mx-10 lg:max-w-7xl"
                }`}
              >
                <Search />
                <div className="bg-neutral absolute top-0 bottom-0 -right-0.5 flex items-center px-3 rounded-r">
                  <SearchIcon />
                </div>
              </div>
              <div>
                <Link href="/cart" className="hidden lg:block">
                  <div className="flex w-full items-center justify-between bg-success hover:bg-secondary px-4 mr-3 py-3 rounded-xl">
                    <span>
                      {cartItemsCount} item(s) : $
                      {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
                    </span>
                    <ShoppingCartIcon />
                  </div>
                </Link>
                <div className="lg:hidden items-center">
                  <ShoppingCartIcon onClick={toggleCartDrawer} />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-between items-center px-3 pb-0.5">
              <div className="flex items-center gap-x-0.5">
                <div
                  className={`group ${
                    navbar ? "fixed top-1.5 z-10" : "relative"
                  }`}
                >
                  <Link href="/categories">
                    <div className="flex gap-x-1 items-center justify-between bg-success text-sm px-8 py-2 rounded">
                      <MenuIcon />
                      <span className="font-semibold">ALL CATEGORIES</span>
                    </div>
                  </Link>
                  <ul className="absolute z-10 w-full hidden group-hover:block bg-white shadow-xl text-accent rounded py-3">
                    {categories?.map(({ name }, i) => {
                      return (
                        <li key={i}>
                          <Link
                            href={`/products/${name}`}
                            className="uppercase text-xs py-1.5 px-3 hover:bg-accent hover:text-white duration-150 flex gap-x-1 items-center"
                          >
                            <KeyboardDoubleArrowRightIcon className="text-error w-4" />
                            {name?.length > 21
                              ? name?.slice(0, 21) + "..."
                              : name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-neutral text-xs px-3 rounded text-center">
                      <LocalShippingIcon className="w-4" />
                      <p>Delivery Information</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-neutral text-xs px-3 rounded text-center">
                      <HelpOutlineIcon className="w-4" />
                      <p>How to Buy?</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-neutral text-xs px-3 rounded text-center">
                      <FavoriteIcon className="w-4" />
                      <p>Wishlist</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-neutral text-xs px-3 rounded text-center">
                      <CompareArrowsIcon className="w-4" />
                      <p>Compare</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className={`${
                  navbar ? "fixed top-3 right-5 z-10" : "relative"
                }`}
              >
                <Link href="/login?redirect=/account">
                  <div className="bg-primary hover:bg-secondary duration-150 h-[3.5vh] flex gap-x-1 items-center justify-center px-5 rounded">
                    <AccountCircleIcon />
                    {status === "loading" ? (
                      "Loading"
                    ) : session?.user ? (
                      <span>{session?.user?.name}</span>
                    ) : (
                      "My Account"
                    )}
                  </div>
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
