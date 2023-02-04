import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import LogoMain from "../public/images/Logo-main.webp";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-[#21323D] w-full text-white">
      <nav className="bg-[#00586D] flex h-8 items-center justify-center lg:justify-between px-3">
        <span className="text-xs invisible">..</span>
        <span className="text-[12px] font-semibold flex justify-between items-center">
          <small>SHOP: 01641757175, DELIVERY: 01919646416</small>
        </span>
        <span className="text-sm font-thin ml-2">ENGLISH</span>
      </nav>
      <nav>
        <div className="display-show">
          <div className="flex items-center justify-between px-3">
            <div>
              <Link href="/">
                <Image
                  width={230}
                  height={230}
                  src={LogoMain}
                  alt="Electronic Bd"
                />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block items-center justify-between mx-10 relative">
              <Search />
            </div>
            <div>
              <Link href="/cart" className="hidden lg:block">
                <div className="flex items-center justify-between bg-[#60ac00] px-4 mr-3 py-3 rounded-xl">
                  <span>0 item(s) - $0.00</span>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    width={20}
                    className="ml-2"
                  />
                </div>
              </Link>
              <div className="flex lg:hidden items-center mx-auto">
                <div>
                  <FontAwesomeIcon icon={faSearch} width={26} />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    width={28}
                    className="ml-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="display-hidden"></div>
      </nav>
    </header>
  );
};

export default Header;
