import { BeakerIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import LogoMain from "../public/images/Logo-main.webp";

const Header = () => {
  return (
    <header className="bg-[#21323D] w-full text-white">
      <div className="bg-[#00586D] flex h-8 items-center justify-center lg:justify-between">
        <span className="text-xs invisible">..</span>
        <span className="text-[12px] font-semibold flex justify-between items-center">
          <PhoneIcon className="h-4 w-4" />
          <small>SHOP: 01641757175, DELIVERY: 01919646416</small>
        </span>
        <span className="text-sm px-3 font-thin">ENGLISH</span>
      </div>
      <nav>
        <div className="display-show">
          <div>
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
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="display-hidden"></div>
      </nav>
    </header>
  );
};

export default Header;
