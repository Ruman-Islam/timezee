import Layout from "@/components/Layout";
import Product from "@/models/Product";
import db from "@/utils/db";
import { Store } from "@/utils/Store";
import {
  faArrowRight,
  faCartPlus,
  faCircleDot,
  faDollar,
  faExclamationCircle,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const ProductScreen = ({ product }) => {
  const { state, dispatch } = useContext(Store);
  const [activeTab, setActiveTab] = useState("description");
  const { name, images } = product;

  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    }

    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity: quantity },
    });
    toast.success("Product added to the cart");
  };

  return (
    <Layout title={name}>
      <div className="px-5">
        <div className="py-5">
          <h1 className="font-bold text-accent text-[20px]">{name}</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 border-t border-thin mb-5">
          <div className="flex l">
            <div className="flex flex-col lg:flex-row flex-grow">
              <div className="w-[100px] border-r border-thin">img</div>
              <div className="lg:w-[400px] lg:h-[400px] xl:h-[500px] xl:w-[500px] 2xl:h-[700px] 2xl:w-[700px]">
                <Image src={images[0]} width={1000} height={600} alt={name} />
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <Link
              href="/"
              className="flex p-4 bg-info text-error max-w-[700px]"
            >
              <div>
                <FontAwesomeIcon icon={faExclamationCircle} width={20} />
              </div>
              <div className="ml-2">
                <h6 className="text-[15px]">সতর্কীকরণ</h6>
                <p className="text-[13px]">
                  Please read the terms and condition before placing an order.
                  অর্ডার করার আগে শর্তাবলী পড়ুন দয়া করে
                </p>
              </div>
            </Link>
            <div className="text-[13px] py-5 mt-3">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEye} width={12} />
                <h3 className="ml-2 uppercase text-accent">
                  <span className="font-semibold">product views:</span>
                  <span>132</span>
                </h3>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleDot} width={8} />
                <h3 className="uppercase">
                  <span className="ml-3 font-semibold">STOCK: </span>
                  <span className="text-success">In Stock</span>
                </h3>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleDot} width={8} />
                <h3 className="uppercase">
                  <span className="ml-3 font-semibold">model: </span>
                  <span>2361</span>
                </h3>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleDot} width={8} />
                <h3 className="uppercase">
                  <span className="ml-3 font-semibold">sku: </span>
                  <span>39000--3-W-37</span>
                </h3>
              </div>
            </div>
            <div className="max-w-[700px] border-t border-b border-thin flex justify-left p-2 text-warning">
              <FontAwesomeIcon icon={faStar} width={16} />
              <FontAwesomeIcon icon={faStar} width={16} />
              <FontAwesomeIcon icon={faStar} width={16} />
              <FontAwesomeIcon icon={faStar} width={16} />
              <FontAwesomeIcon icon={faStar} width={16} />
            </div>
            <div className="py-2">
              <span className="text-[30px] text-error font-bold">৳455.00</span>
            </div>
            <div>
              <div className="flex w-fit">
                <div className="bg-accent text-base text-[14px] hover:bg-primary duration-200 flex justify-center">
                  <button
                    onClick={() => addToCartHandler(product)}
                    className="px-2 py-2 cursor-pointer flex items-center gap-x-1 uppercase"
                  >
                    <FontAwesomeIcon icon={faCartPlus} width={14} />
                    <span>add to cart</span>
                  </button>
                </div>
                <div className="bg-success text-base text-[14px] hover:bg-error duration-200 flex justify-center px-2">
                  <button className="uppercase py-2 flex items-center gap-x-1">
                    <FontAwesomeIcon icon={faDollar} width={11} />
                    <span>buy now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[750px] py-2">
          <ul className="flex gap-x-5  border-b border-thin uppercase font-semibold text-[14px] text-accent">
            <li
              onClick={() => setActiveTab("description")}
              className={`relative before:absolute before:w-full before:h-full pb-2 before:border-error hover:text-error duration-150 cursor-pointer ${
                activeTab.includes("description")
                  ? "before:border-b"
                  : "before:border-0"
              }`}
            >
              Description
            </li>
            <li
              onClick={() => setActiveTab("reviews")}
              className={`relative before:absolute before:w-full before:h-full pb-2 before:border-error hover:text-error duration-150 cursor-pointer ${
                activeTab.includes("reviews")
                  ? "before:border-b"
                  : "before:border-0"
              }`}
            >
              Reviews
            </li>
          </ul>
          <div
            className={`${
              activeTab.includes("description") ? "block mt-5" : "hidden"
            }`}
          >
            <h4 className="font-semibold text-[14px]">Specifications</h4>
            <ul className="text-[14px] list-disc pl-4">
              <li>Mode: Wester A2212</li>
              <li>KV:1000</li>
              <li>Max Efficiency: 80%</li>
              <li>Max Efficiency Current: 4-10A</li>
              <li>Current Capacity: 12A/60s</li>
              <li>No Load Current @ 10V: 0.5A</li>
              <li>Motor Dimensions: 27.5 x 30mm</li>
              <li>Shaft Diameter: 3.17mm</li>
              <li>Weight: 47g - 4</li>
            </ul>
          </div>

          <div
            className={`${
              activeTab.includes("reviews") ? "block mt-5" : "hidden"
            }`}
          >
            <ul className="text-accent">
              <li className="border border-thin">
                <div className="flex justify-between p-2 border-b border-thin text-[13px]">
                  <p className="font-semibold">Md Nurullah</p>
                  <p>02/05/2019</p>
                </div>
                <div className="p-2 text-[13px]">
                  Motor proyojon.....Helicopter toiri korbo....Pray 80 pis
                  lagbe....Damta ektu komale valo hoto....
                </div>
                <div className="flex text-warning p-2">
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                </div>
              </li>
            </ul>
          </div>

          <div
            className={`mt-10 ${
              activeTab.includes("reviews") ? "block" : "hidden"
            }`}
          >
            <p className="font-bold">WRITE A REVIEW</p>
            <form className="pt-1">
              <div className="flex items-center justify-between mb-2">
                <input
                  type="text"
                  className="border border-thin w-full outline-none hover:border-secondary duration-150 p-2 text-[14px]"
                  placeholder="Your name"
                />
              </div>
              <div className="flex items-center justify-between">
                <textarea
                  className="border border-thin w-full p-2 outline-none hover:border-secondary duration-150 text-[14px]"
                  placeholder="Your review"
                  cols={25}
                  rows={4}
                />
              </div>
              <div className="flex items-center justify-end gap-x-1 text-[13px]">
                <span>Bad</span>
                <div className="flex items-center gap-x-2 py-3">
                  <input type="radio" value={1} name="review" />
                  <input type="radio" value={2} name="review" />
                  <input type="radio" value={3} name="review" />
                  <input type="radio" value={4} name="review" />
                  <input type="radio" value={5} name="review" />
                </div>
                <span>Good</span>
              </div>
              <div>
                <button
                  type="submit"
                  className="cursor-pointer bg-accent hover:bg-primary duration-150  w-fit py-1 px-3 text-base flex items-center gap-x-2"
                >
                  Submit
                  <FontAwesomeIcon icon={faArrowRight} width={10} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
};

export { getServerSideProps };
export default ProductScreen;
