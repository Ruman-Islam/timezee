import Image from "next/image";
import Link from "next/link";
import Rating from "react-rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const ProductCard = ({ product, addToCartHandler }) => {
  const { name, images, sellPrice, _id, rating } = product;

  return (
    <div className="hover:z-10">
      <div className="hover:shadow-[0_0_40px_-15px_rgb(109,118,125)] group hover:z-10 text-accent p-4">
        <div className="w-4/4 h-[490px] bg-white flex flex-col justify-between relative before:absolute before:overflow-hidden overflow-hidden before:left-0 before:rounded-xl before:w-full before:h-full before:border before:border-thin group-hover:before:border-none">
          <div className="p-1 rounded-xl">
            <Link
              href={`/product/${_id}`}
              className="overflow-hidden relative block h-[272px] rounded-tl-lg rounded-tr-lg"
            >
              <>
                <Image
                  className="w-full scale-100 group-hover:scale-110 duration-300 rounded-lg border"
                  src={`${images[0]}`}
                  width={800}
                  height={100}
                  alt={name}
                />
                {/* <Image
                  className="w-full absolute top-0 left-0 invisible group-hover:block group-hover:visible opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 duration-300"
                  src={`${images[1]}`}
                  width={800}
                  height={100}
                  alt={name}
                /> */}
                <div className="bg-white p-1 absolute bottom-0 left-0 right-0 mx-auto flex justify-left w-fit text-amazonOrange">
                  <Rating
                    initialRating={rating}
                    emptySymbol={<StarBorderRoundedIcon />}
                    fullSymbol={<StarRoundedIcon />}
                    readonly
                  />
                </div>
              </>
            </Link>
          </div>
          <div className="flex-grow">
            <div className="pt-3 px-1 leading-none font-semibold text-center relative before:absolute before:w-48 before:h-full before:mx-auto before:left-0 before:right-0 before:border-b before:border-thin text-xs">
              <Link
                href={`/product/${_id}`}
                className="relative duration-150 z-10 hover:text-amazonBlue capitalize"
              >
                {name}
              </Link>
            </div>
            <div className="text-center text-amazonAccent mt-4">${sellPrice}</div>
          </div>
          <div className="footer">
            <div className="relative">
              <div className="text-xs py-4 flex justify-center">
                <div>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className="px-4 py-0.5 uppercase bg-accent text-white text-xs hover:bg-amazonBlue rounded-2xl duration-200 flex justify-center items-center gap-x-2"
                  >
                    <AddShoppingCartIcon style={{ width: "18px" }} />
                    <span>add to cart</span>
                  </button>
                </div>
              </div>
              <div className="border-t border-thin px-2">
                <Link href={`/product/${_id}`} className="inline-block">
                  <div className="flex gap-x-1 items-center">
                    <MonetizationOnIcon
                      style={{ width: "18px" }}
                      className="text-amazonBlue"
                    />
                    <span className="text-xs hover:text-error">Buy Now</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
