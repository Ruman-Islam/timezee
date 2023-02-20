import { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSession } from "next-auth/react";

const LeftMobileDrawer = ({ isNavOpen, toggleNavDrawer }) => {
  const { status, data: session } = useSession();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data?.brands);
        setCategories(data?.categories);
      });
  }, []);

  return (
    <>
      <Drawer
        open={isNavOpen}
        onClose={toggleNavDrawer}
        direction="left"
        duration={300}
        overlayOpacity={0.7}
        lockBackgroundScroll
        size={300}
      >
        <div className="relative">
          <div className="text-amazonAccent text-sm">
            <div className="bg-amazonNeutral flex justify-between items-center text-base">
              <div className="py-4 pl-5 font-semibold flex items-center gap-x-1">
                <AccountCircleIcon />
                Hello, {session?.user ? session?.user?.name : "Sign in"}
              </div>
            </div>

            <div className="py-2 border-b border-thin">
              <div>
                <div className="pl-5">
                  <h3 className="text-amazonNeutral font-semibold text-lg">
                    Brands of Watches
                  </h3>
                </div>
                <ul>
                  {brands?.map(({ name }, i) => {
                    return (
                      <Link
                        key={i}
                        className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                        href={`/products/${name}`}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="py-2 border-b border-thin">
              <div>
                <div className="pl-5">
                  <h3 className="text-amazonNeutral font-semibold  text-lg">Categories</h3>
                </div>
                <ul>
                  {categories?.map(({ name }, i) => {
                    return (
                      <Link
                        key={i}
                        className="flex items-center hover:bg-amazonGray px-5 py-1.5 cursor-pointer capitalize"
                        href={`/products/${name}`}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-2 -right-10">
            <button onClick={toggleNavDrawer} className="text-white">
              <ClearIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LeftMobileDrawer;
