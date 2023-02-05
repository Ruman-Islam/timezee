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
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import LogoMain from "../public/images/Logo-main.webp";
import Search from "./Search";
import useNav from "@/hooks/useNav";

const Header = () => {
  const { navbar } = useNav();

  return (
    <header className="w-full text-white">
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
                  navbar === 110
                    ? "fixed left-0 right-0 lg:left-64 lg:right-60 top-16 lg:top-1.5 mx-auto block z-10"
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
                  <FontAwesomeIcon icon={faCartShopping} width={30} />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-between items-center px-3 pb-0.5">
              <div className="flex">
                <div>
                  <Link href="/categories">
                    <div className="group flex items-center justify-between bg-[#3ABF6F] text-sm p-3 rounded-xl">
                      <FontAwesomeIcon
                        className="group-hover:text-red-500"
                        icon={faBars}
                        width={20}
                        height={20}
                      />
                      <span className="pl-2 pr-10">ALL CATEGORIES</span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/delivery-info">
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded-xl text-center ml-2">
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
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded-xl text-center ml-0.5">
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
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded-xl text-center ml-0.5">
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
                    <div className="bg-[#005E6D] text-xs px-3 py-1 rounded-xl text-center ml-0.5">
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
              <div>
                <Link href="account">
                  <div className="bg-[#3A4750] flex items-center px-5 py-2 rounded-xl">
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
              className={`bg-[#21323D] hidden lg:flex items-center justify-between px-3 py-1 fixed top-0 left-0 right-0 duration-300 min-h-[36px] ${
                navbar === 110 ? "-translate-y-0" : "-translate-y-56"
              }`}
            >
              <div>
                <Link href="/categories">
                  <div className="hidden lg:flex items-center justify-between bg-[#3ABF6F] text-sm p-2 rounded-xl">
                    <FontAwesomeIcon icon={faBars} width={20} height={24} />
                    <span className="pl-2 pr-10">ALL CATEGORIES</span>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="account">
                  <div className="bg-[#3A4750] hidden lg:flex px-5 py-2 rounded-xl">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      width={16}
                      className="mr-1"
                    />
                    My Account
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
