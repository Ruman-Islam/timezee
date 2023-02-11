import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faDollarSign,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProductCard = ({ product, addToCartHandler }) => {
  const { name, images, price } = product;

  return (
    <div className="hover:z-10">
      <div className="hover:shadow-[0_5px_60px_-10px_rgb(109,118,125)] group hover:z-10 text-accent p-4">
        <div className="w-4/4 h-[490px] bg-base flex flex-col justify-between relative before:absolute before:overflow-hidden overflow-hidden before:left-0 before:rounded-xl before:w-full before:h-full before:border before:border-thin group-hover:before:border-none">
          <div className="p-1 rounded-xl">
            <Link
              href={`/product/${product.slug}`}
              className="overflow-hidden relative block h-[272px] rounded-tl-lg rounded-tr-lg"
            >
              <>
                <Image
                  className="w-full scale-100 group-hover:scale-110 duration-300 rounded-lg border"
                  src={`${images[0]}`}
                  width={800}
                  height={100}
                  alt={product.name}
                />
                <Image
                  className="w-full absolute top-0 left-0 invisible group-hover:block group-hover:visible opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 duration-300"
                  src={`${images[1]}`}
                  width={800}
                  height={100}
                  alt={product.name}
                />
                <div className="bg-base p-1 absolute bottom-0 left-0 right-0 mx-auto flex justify-left w-fit text-warning">
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                  <FontAwesomeIcon icon={faStar} width={16} />
                </div>
              </>
            </Link>
          </div>
          <div className="flex-grow">
            <div className="py-1.5 px-1 leading-none font-semibold text-center relative before:absolute before:w-48 before:h-full before:mx-auto before:left-0 before:right-0 before:border-b before:border-thin text-sm">
              <Link
                href={`/product/${product.slug}`}
                className="relative duration-150 z-10 hover:text-primary"
              >
                <small>{name}</small>
              </Link>
            </div>
            <div className="text-center text-error mt-4">৳{price}</div>
          </div>
          <div className="footer">
            <div className="relative">
              <div className="text-xs py-4 flex justify-center">
                <div>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className="px-4 py-1.5 uppercase bg-accent text-base text-xs hover:bg-primary rounded-2xl duration-200 flex justify-center items-center gap-x-2"
                  >
                    <FontAwesomeIcon icon={faCartShopping} width={15} />
                    <span>add to cart</span>
                  </button>
                </div>
              </div>
              <div className="border-t border-thin px-2 py-0.5">
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-block"
                >
                  <div className="flex gap-x-1 items-center">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      width={8}
                      className="text-success"
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
