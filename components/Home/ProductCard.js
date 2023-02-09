import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faStar,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProductCard = ({ img1, img2 }) => {
  const submitToCart = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };

  return (
    <div className="min-w-[300px] p-2 hover:shadow-[0_5px_60px_-10px_rgb(109,118,125)] group hover:z-10 text-accent">
      <div className="bg-base rounded-xl relative before:absolute before:overflow-hidden overflow-hidden before:left-0 before:rounded-xl before:w-full before:h-full before:border before:border-thin group-hover:before:border-none">
        <Link href="/" className="overflow-hidden relative block p-1">
          <Image
            className="w-full scale-100 group-hover:scale-110 duration-300 rounded-lg"
            src={img1}
            width={600}
            height={100}
            alt=""
          />
          <Image
            className="w-full absolute top-0 left-0 invisible group-hover:block group-hover:visible opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 duration-300 "
            src={img2}
            width={600}
            height={100}
            alt=""
          />
        </Link>
        <div className="relative z-20">
          <div className="border-b border-thin flex justify-left p-2 text-warning">
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
            <FontAwesomeIcon icon={faStar} width={16} />
          </div>
          <div className="py-1 my-2 leading-none font-semibold text-center relative before:absolute before:w-48 before:h-full before:mx-auto before:left-0 before:right-0 before:border-b before:border-thin before:-z-10 duration-300 text-sm">
            <Link href="/">
              <small>
                DOUBLE CONTACTS, 5 CONTACTS SILVER CONTACTS AUTOMATIC RELAY
              </small>
            </Link>
          </div>
          <div className="text-center text-error">৳1,300.00</div>
          <div className="text-xs p-5 flex justify-center">
            <form
              onSubmit={submitToCart}
              className="flex rounded-2xl border border-accent"
            >
              <div className="flex justify-center rounded-2xl">
                <input
                  name="item-count"
                  type="number"
                  className="w-7 pl-3 outline-none rounded-2xl"
                  defaultValue={1}
                />
              </div>
              <div className="flex text-base justify-center items-center flex-col">
                <button className="bg-[#3A4750] p-0.5 hover:bg-secondary">
                  <FontAwesomeIcon icon={faChevronUp} width={12} />
                </button>
                <button className="bg-[#3A4750] p-0.5 hover:bg-secondary">
                  <FontAwesomeIcon icon={faChevronDown} width={12} />
                </button>
              </div>
              <div className="bg-accent text-base text-[11px] hover:bg-primary rounded-tr-2xl rounded-br-2xl duration-200 flex justify-center">
                <input
                  type="submit"
                  value="ADD TO CART"
                  className="py-1 px-2 cursor-pointer"
                />
              </div>
            </form>
          </div>
          <div className="border-t border-thin p-2">
            <Link href="/" className="inline-block">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  width={8}
                  className="text-success"
                />
                <span className="text-xs ml-1 hover:text-error">Buy Now</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
