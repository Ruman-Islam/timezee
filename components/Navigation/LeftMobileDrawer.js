import React, { useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCodeCompare,
  faUserCircle,
  faXmark,
  faSquareVirus,
  faBabyCarriage,
  faTags,
  faDollar,
  faQuestionCircle,
  faBook,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon icon={faXmark} width={18} className="mx-auto" />
            </button>
          </div>
          <div className="p-3">
            <ul className="h-[91vh] overflow-y-scroll">
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faSquareVirus}
                  width={18}
                />
                <Link href="/about" className="ml-2">
                  Category
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faBabyCarriage}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  all department
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faTags}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  offers
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faUserCircle}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  my account
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faHeart}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  wishlist
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faCodeCompare}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  compare
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faDollar}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  payment option
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faBook}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  Blog
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faQuestionCircle}
                  width={18}
                />
                <Link href="/" className="ml-2">
                  how to order
                </Link>
              </li>
              <li className="flex items-center py-3 font-semibold">
                <FontAwesomeIcon
                  className="text-error"
                  icon={faSignOut}
                  width={18}
                />
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
