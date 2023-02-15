import Link from "next/link";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products, addToCartHandler }) => {
  return (
    <div className="py-5 px-1">
      <div className="pl-2 relative before:absolute before:w-10 before:h-full before:border-b before:border-error text">
        <h4 className="uppercase text-accent">featured</h4>
      </div>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
        {products?.slice(0, 6)?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          );
        })}
      </div>
      <div className="rounded-2xl bg-accent hover:bg-neutral duration-100 my-2 py-0.5 text-base">
        <Link
          href="/products/featured"
          className="block font-medium text-white text-center uppercase py-1.5 text-sm"
        >
          more featured products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
