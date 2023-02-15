import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ClearIcon from "@mui/icons-material/Clear";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BookIcon from "@mui/icons-material/Book";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";

const LeftMobileDrawer = ({ isNavOpen, toggleNavDrawer }) => {
  return (
    <>
      <Drawer
        open={isNavOpen}
        onClose={toggleNavDrawer}
        direction="left"
        duration={300}
        overlayOpacity={0.5}
        lockBackgroundScroll
        size={320}
      >
        <div className="text-accent uppercase text-sm">
          <div className="bg-error flex justify-between items-center text-base">
            <div className="p-2 text-lg font-semibold">MENU</div>
            <button onClick={toggleNavDrawer} className="px-3 py-2">
              <ClearIcon className="mx-auto" />
            </button>
          </div>
          <div className="p-3">
            <ul className="h-[91vh] overflow-y-scroll">
              <li className="flex items-center py-3 font-semibold">
                <CategoryIcon className="text-error" />
                <Link href="/about" className="ml-2">
                  Category
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <DashboardIcon className="text-error" />
                <Link href="/" className="ml-2">
                  all department
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <LocalOfferIcon className="text-error" />
                <Link href="/" className="ml-2">
                  offers
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FavoriteIcon className="text-error" />
                <Link href="/" className="ml-2">
                  wishlist
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <CompareArrowsIcon className="text-error" />
                <Link href="/" className="ml-2">
                  compare
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <MonetizationOnIcon className="text-error" />
                <Link href="/" className="ml-2">
                  payment option
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <BookIcon className="text-error" />
                <Link href="/" className="ml-2">
                  Blog
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <HelpOutlineIcon className="text-error" />
                <Link href="/" className="ml-2">
                  how to order
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <AccountCircleIcon className="text-error" />
                <Link href="/" className="ml-2">
                  my account
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <LogoutIcon className="text-error" />
                <Link href="/" className="ml-2">
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LeftMobileDrawer;
