import { useContext } from "react";
import { Store } from "@/utils/Store";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";

const AccountSidebar = () => {
  const { data: session } = useSession();
  const { dispatch } = useContext(Store);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="w-full lg:w-[200px] border-r border-l border-thin bg-white text-amazonOrange md:text-accent p-2 uppercase">
      <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1">
        <h4 className="text-sm font-semibold">account menu</h4>
      </div>
      <ul className="my-2 grid lg:block grid-cols-3">
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>my account</span>
          </Link>
        </li>
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account/address"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>address book</span>
          </Link>
        </li>
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account/wishlist"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>wishlist</span>
          </Link>
        </li>
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account/orders"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>order history</span>
          </Link>
        </li>
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account/returns"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>returns</span>
          </Link>
        </li>
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account/transaction"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>transactions</span>
          </Link>
        </li>
        <li className="py-1 lg:py-2">
          <Link
            href="/login?redirect=/account/newsletter"
            className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
          >
            <ChevronRightIcon />
            <span>newsletter</span>
          </Link>
        </li>
        {session?.user && (
          <li className="py-1 lg:py-2">
            <button
              onClick={() => logoutClickHandler()}
              className="flex gap-x-0 lg:gap-x-1 items-center text-sm font-semibold text-amazonBlue hover:text-amazonOrange duration-150 pl-1.5"
            >
              <LogoutIcon />
              <span>Logout</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AccountSidebar;
