import { useContext } from "react";
import { Store } from "@/utils/Store";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Cookies from "js-cookie";
import { accountNavigationData } from "@/constants/common";
import CustomButton from "../UI/Button";

const AccountSidebar = () => {
  const { data: session } = useSession();
  const { dispatch } = useContext(Store);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="w-full lg:w-[300px] h-fit border border-t-0 border-thin bg-white text-amazonOrange md:text-accent p-2 uppercase">
      <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1">
        <h4 className="text-sm font-semibold">account menu</h4>
      </div>
      <ul className="my-2 grid lg:block grid-cols-2 md:grid-cols-3 place-items-start">
        {accountNavigationData?.map((item, index) => (
          <li className="py-1 lg:py-2" key={index}>
            <Link
              href={item?.url}
              className="flex w-fit gap-x-0 lg:gap-x-1 items-center text-xs font-semibold text-amazonNeutral hover:text-amazonOrange duration-150"
            >
              <ChevronRightIcon />
              <span>{item?.title}</span>
            </Link>
          </li>
        ))}

        {session?.user ? (
          <li className="py-1 lg:py-2">
            <CustomButton
              onClick={() => logoutClickHandler()}
              className="flex gap-x-0 lg:gap-x-1 items-center text-sm font-semibold text-error hover:text-amazonOrange duration-150 pl-1.5"
            >
              <LogoutIcon />
              <span>Logout</span>
            </CustomButton>
          </li>
        ) : (
          <li className="py-1 lg:py-2">
            <Link
              href="/login?redirect=/account"
              className="flex gap-x-0 lg:gap-x-1 items-center text-sm font-semibold text-amazonBlue hover:text-amazonOrange duration-150 pl-1"
            >
              <LoginIcon />
              <span>Sign In</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AccountSidebar;
