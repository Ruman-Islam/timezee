import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../Search";
import useNav from "@/hooks/useNav";
import LogoMain from "../../public/images/Logo-main.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faSearch,
  faCircleQuestion,
  faHeart,
  faCodeCompare,
  faCartShopping,
  faBars,
  faBarsStaggered,
  faUserCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import LeftMobileDrawer from "./LeftMobileDrawer";
import MobileCartDrawer from "./MobileCartDrawer";

const Header = () => {
  const { navbar } = useNav();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleNavDrawer = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  const toggleCartDrawer = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full text-white mb-10 lg:mb-2">
      <nav
        className={`bg-[#00586D] flex h-8 items-center justify-center lg:justify-between px-3`}
      >
        <span className="text-xs invisible">..</span>
        <span className="text-[12px] font-semibold flex justify-between items-center">
          <small>SHOP: 01641757175, DELIVERY: 01919646416</small>
        </span>
        <span className="text-sm font-thin ml-2">ENGLISH</span>
      </nav>
      <nav className="bg-[#21323D] fixed lg:static top-0 left-0 right-0">
        <div>
          <div>
            <div className="flex items-center justify-between px-3 py-0 lg:py-2">
              <div className="flex items-center ">
                <FontAwesomeIcon
                  icon={faBarsStaggered}
                  width={30}
                  className="block lg:hidden"
                  onClick={toggleNavDrawer}
                />
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
                <div className="bg-[#00586D] absolute top-0 bottom-0 -right-0.5 flex items-center px-3 rounded-r">
                  <FontAwesomeIcon icon={faSearch} width={20} />
                </div>
              </div>
              <div>
                <Link href="/cart" className="hidden lg:block">
                  <div className="flex w-full items-center justify-between bg-[#60ac00] hover:bg-[#00586D] px-4 mr-3 py-3 rounded-xl">
                    <span>0 item(s) - $0.00</span>
                    <FontAwesomeIcon icon={faCartShopping} width={25} />
                  </div>
                </Link>
                <div className="lg:hidden items-center">
                  <FontAwesomeIcon
                    onClick={toggleCartDrawer}
                    icon={faCartShopping}
                    width={25}
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-between items-center px-3 pb-0.5">
              <div className="flex">
                <div
                  className={`group ${
                    navbar ? "fixed top-0.5 z-10" : "relative"
                  }`}
                >
                  <Link href="/categories">
                    <div className="flex items-center justify-between bg-[#3ABF6F] text-sm p-3 rounded">
                      <FontAwesomeIcon icon={faBars} width={20} height={20} />
                      <span className="pl-2 pr-10 font-semibold">
                        ALL CATEGORIES
                      </span>
                    </div>
                  </Link>
                  <ul className="absolute w-full hidden group-hover:block bg-white drop-shadow-lg text-black rounded">
                    <li className="px-3 py-2 hover:bg-gray-100 flex items-center text-sm">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width={10}
                        height={10}
                        className="text-red-500"
                      />
                      <Link href="/" className="px-2 w-full">
                       category
                      </Link>
                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100 flex items-center text-sm">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width={10}
                        height={10}
                        className="text-red-500"
                      />
                      <Link href="/" className="px-2 w-full">
                        category
                      </Link>
                    </li>
                    <li className="px-3 py-2 hover:bg-gray-100 flex items-center text-sm">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        width={10}
                        height={10}
                        className="text-red-500"
                      />
                      <Link href="/" className="px-2 w-full">
                        category
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded text-center ml-2">
                      <FontAwesomeIcon
                        icon={faTruck}
                        width={20}
                        className="mx-auto"
                      />
                      <p>Delivery Information</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded text-center ml-0.5">
                      <FontAwesomeIcon
                        icon={faCircleQuestion}
                        width={16}
                        className="mx-auto"
                      />
                      <p>How to Buy?</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded text-center ml-0.5">
                      <FontAwesomeIcon
                        icon={faHeart}
                        width={16}
                        className="mx-auto"
                      />
                      <p>Wishlist</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded text-center ml-0.5">
                      <FontAwesomeIcon
                        icon={faCodeCompare}
                        width={16}
                        className="mx-auto"
                      />
                      <p>Compare</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className={`${
                  navbar ? "fixed top-1 right-5 z-10" : "relative"
                }`}
              >
                <Link href="account">
                  <div className="bg-[#3A4750] flex items-center px-5 py-2 rounded">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      width={16}
                      className="mr-1"
                    />
                    <span>My Account</span>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`bg-[#21323D] hidden lg:flex items-center justify-between px-3 py-0.5 fixed top-0 left-0 right-0 duration-300 min-h-[50px] ${
                navbar ? "-translate-y-0" : "-translate-y-56"
              }`}
            ></div>
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

export default Header;
