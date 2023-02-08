import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const MobileCartDrawer = ({ isCartOpen, toggleCartDrawer }) => {
  return (
    <>
      <Drawer
        open={isCartOpen}
        onClose={toggleCartDrawer}
        direction="right"
        duration={300}
        overlayOpacity={0.5}
        lockBackgroundScroll
        size={320}
      >
        <div className="text-black uppercase text-sm">
          <div className="bg-[#e73d50] flex justify-between items-center text-white">
            <div className="p-2 text-lg font-semibold">Your cart</div>
            <button onClick={toggleCartDrawer} className="px-3 py-2">
              <FontAwesomeIcon icon={faXmark} width={18} className="mx-auto" />
            </button>
          </div>
          <div className="p-3 h-[93vh] flex flex-col justify-between">
            <ul className="h-fit overflow-y-scroll">
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
              <li className="grid grid-cols-4 border items-center mb-1 p-1">
                <div className="col-span-1 w-16">
                  <Image
                    src="https://res.cloudinary.com/arifscloud/image/upload/v1625119382/image_apxesv.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-xs col-span-2 flex items-center">
                  <p>Product name with discriptions</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <span>&#215;1</span>
                  <span>$220.00</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    width={12}
                    className="mx-auto text-[#e73d50]"
                  />
                </div>
              </li>
            </ul>
            <div className="text-black mt-5 h-[150px] border-t border-[#e73d50] p-2">
              <div>
                <p className="text-xs text-right font-semibold">
                  <span>Sub-Total</span>
                  <span className="ml-2">$220.00</span>
                </p>
                <p className="text-xs text-right font-semibold">
                  <span>Total</span>
                  <span className="ml-2">$250.00</span>
                </p>
              </div>
              <div className="w-full mt-4 flex justify-center gap-x-2">
                <button className="p-3 bg-[#21323D] text-white">view cart</button>
                <button className="p-3 bg-[#21323D] text-white">checkout</button>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileCartDrawer;
