import { Store } from "@/utils/Store";
import { faChevronRight, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";

const AccountSidebar = () => {
  const { data: session } = useSession();
  const { dispatch } = useContext(Store);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="w-[200px] border-r border-thin bg-white text-error md:text-accent p-2 uppercase">
      <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-error pb-1">
        <h4 className="text-sm font-semibold">account menu</h4>
      </div>
      <ul className="my-2">
        <li className="py-2">
          <Link
            href="/login?redirect=/account"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>my account</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/login?redirect=/account/addressBook"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>address book</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/login?redirect=/account/wishlist"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>wishlist</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/login?redirect=/account/orders"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>order history</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/login?redirect=/account/returns"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>returns</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/login?redirect=/account/transaction"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>transactions</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/login?redirect=/account/newsletter"
            className="flex w-fit gap-x-1 items-center text-xs font-semibold text-neutral hover:text-error duration-150"
          >
            <FontAwesomeIcon icon={faChevronRight} width={8} />
            <span>newsletter</span>
          </Link>
        </li>
        {session?.user && (
          <li className="py-2">
            <button
              onClick={() => logoutClickHandler()}
              className="flex gap-x-1 items-center text-sm font-semibold text-primary hover:text-error duration-150"
            >
              <FontAwesomeIcon icon={faSignOut} width={15} />
              <span>Logout</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AccountSidebar;
