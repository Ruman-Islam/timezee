import { useContext, useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { toast } from "react-toastify";
import Layout from "@/components/Layout";
import Product from "@/models/Product";
import db from "@/utils/db";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Store } from "@/utils/Store";
import Rating from "react-rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const ProductScreen = ({ product: {data} }) => {
  const {
    name,
    images,
    countInStock,
    productViews,
    brand,
    model,
    size,
    sku,
    sellPrice,
    specification,
    description,
    reviews,
    rating,
    _id,
  } = data;

  const { width } = useWindowDimensions();
  const { state, dispatch } = useContext(Store);
  const [enlargedImagePosition, setEnlargedImagePosition] = useState("");
  const [img, setImg] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (width <= 1050) {
      setEnlargedImagePosition("over");
    } else {
      setEnlargedImagePosition("");
    }
  }, [width]);

  if (!data) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === _id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${_id}`);

    if (data.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    } else {
      dispatch({
        type: "CART_ADD_ITEM",
        payload: { ...data, quantity: quantity },
      });
      toast.success("Product added to the cart");
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-1 py-10">
        <div className="flex flex-col gap-x-5 lg:flex-row">
          <div className="flex flex-col gap-x-2 mb-3 mx-auto">
            <div className="left_2 max-w-[500px] border border-thin mb-0.5 bg-white">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: img.name,
                    isFluidWidth: true,
                    src: img,
                  },
                  largeImage: {
                    src: img,
                    width: enlargedImagePosition ? 600 : 1000,
                    height: enlargedImagePosition ? 600 : 1000,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: "1500",
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  },
                  enlargedImagePosition: enlargedImagePosition,
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "125%",
                  },
                  shouldUsePositiveSpaceLens: true,
                }}
              />
            </div>
            <div className="flex gap-x-1 bg-white">
              {images.map((image, i) => (
                <div
                  className={`flex items-center justify-center w-[50px] h-[50px] cursor-pointer ${
                    img == image
                      ? "border border-amazonOrange"
                      : "border border-thin"
                  }`}
                  key={i}
                  onClick={() => setImg(image)}
                >
                  <Image
                    width={500}
                    height={200}
                    src={image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow flex flex-col border-r border-thin">
            <div>
              <div>
                <h1 className="font-semibold text-amazonAccent text-xl uppercase">
                  {name}
                </h1>
              </div>
              <div className="text-xs py-4">
                <div className="flex items-center mb-4">
                  <h3 className="uppercase text-amazonAccent">
                    <span className="font-semibold">product views: </span>
                    <span className="font-bold">{productViews}</span>
                  </h3>
                </div>

                <div className="flex items-center">
                  <FiberManualRecordIcon style={{ width: "10px" }} />
                  <h3 className="uppercase">
                    <span className="ml-3 font-semibold">STOCK: </span>
                    {countInStock > 0 ? (
                      <span className="text-success">In Stock</span>
                    ) : (
                      <span className="text-error">Out of Stock</span>
                    )}
                  </h3>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon style={{ width: "10px" }} />
                  <h3 className="uppercase">
                    <span className="ml-3 font-semibold">size: </span>
                    <span>{size}</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon style={{ width: "10px" }} />
                  <h3 className="uppercase">
                    <span className="ml-3 font-semibold">model: </span>
                    <span>{model}</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon style={{ width: "10px" }} />
                  <h3 className="uppercase">
                    <span className="ml-3 font-semibold">brand: </span>
                    <span>{brand}</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <FiberManualRecordIcon style={{ width: "10px" }} />
                  <h3 className="uppercase">
                    <span className="ml-3 font-semibold">sku: </span>
                    <span>{sku}</span>
                  </h3>
                </div>
              </div>
              <div className="border-t border-b border-thin flex justify-left py-2 text-amazonOrange">
                <Rating
                  initialRating={rating}
                  emptySymbol={<StarBorderRoundedIcon />}
                  fullSymbol={<StarRoundedIcon />}
                  readonly
                />
              </div>
              <div className="py-2 max-w-2xl">
                <h1 className="font-semibold">Description</h1>
                <p className="text-sm">{description}</p>
              </div>
              <div className="py-2">
                <span className="text-[30px] text-amazonBlue font-bold">
                  ${sellPrice}
                </span>
              </div>
              <div>
                <div className="flex w-fit">
                  <div className="bg-amazonNeutral text-white text-xs hover:bg-amazonBlue duration-200 flex justify-center">
                    <button
                      onClick={() => addToCartHandler(data)}
                      className="px-2 py-1 cursor-pointer flex items-center gap-x-1 uppercase"
                    >
                      <AddShoppingCartIcon style={{ width: "18px" }} />
                      <span>add to cart</span>
                    </button>
                  </div>
                  <div className="bg-success text-white text-xs hover:bg-amazonOrange duration-200 flex justify-center px-2">
                    <button className="uppercase py-1 flex items-center gap-x-1">
                      <MonetizationOnIcon style={{ width: "18px" }} />
                      <span>buy now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" className="flex mt-2 p-4 bg-info text-error">
              <div>
                <ErrorOutlineIcon />
              </div>
              <div className="ml-2">
                <h6 className="text-sm font-semibold">Warning</h6>
                <p className="text-xs">
                  Please read the terms and condition before placing an order.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-[750px] py-5">
          <ul className="flex gap-x-5  border-b border-thin uppercase font-semibold text-[14px] text-accent">
            <li
              onClick={() => setActiveTab("description")}
              className={`relative before:absolute before:w-full before:h-full pb-2 before:border-amazonOrange hover:text-amazonOrange duration-150 cursor-pointer ${
                activeTab.includes("description")
                  ? "before:border-b"
                  : "before:border-0"
              }`}
            >
              Specification
            </li>
            <li
              onClick={() => setActiveTab("reviews")}
              className={`relative before:absolute before:w-full before:h-full pb-2 before:border-amazonOrange hover:text-amazonOrange duration-150 cursor-pointer ${
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
            <ul className="text-[14px] list-disc pl-4">
              {specification?.map((spec, i) => {
                return <li key={i}>{spec}</li>;
              })}
            </ul>
          </div>

          <div
            className={`${
              activeTab.includes("reviews") ? "block mt-5" : "hidden"
            }`}
          >
            <ul className="text-accent">
              {reviews?.map(({ name, date, text, star }, i) => {
                return (
                  <li className="border border-thin" key={i}>
                    <div className="flex justify-between p-2 border-b border-thin text-[13px]">
                      <p className="font-semibold">{name}</p>
                      <p>{date}</p>
                    </div>
                    <div className="p-2 text-[13px]">{text}</div>
                    <div className="flex text-warning p-2">
                      <Rating
                        // className={styles.star}
                        initialRating={star ? star : 0}
                        emptySymbol={<StarBorderRoundedIcon />}
                        fullSymbol={<StarRoundedIcon />}
                        readonly
                      />
                    </div>
                  </li>
                );
              })}
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
                  className="border border-thin w-full outline-none hover:border-amazonBlue duration-150 p-2 text-[14px]"
                  placeholder="Your name"
                />
              </div>
              <div className="flex items-center justify-between">
                <textarea
                  className="border border-thin w-full p-2 outline-none hover:border-amazonBlue duration-150 text-[14px]"
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
                  className="cursor-pointer bg-accent hover:bg-amazonBlue duration-150  w-fit py-1 px-3 text-white flex items-center gap-x-2"
                >
                  Submit
                  <ArrowRightAltIcon />
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
  const { id } = params;

  // Fetch data from an API
  const productRes = await fetch(
    `http://localhost:7000/api/v1/public/get_single_product?productId=${id}`
  );
  const productData = await productRes.json();

  return {
    props: {
      product: productData,
    },
  };
};

export { getServerSideProps };
export default ProductScreen;
