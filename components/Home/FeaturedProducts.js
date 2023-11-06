import Link from "next/link";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products, addToCartHandler }) => {
  return (
    <div className="py-5 px-1">
      <div className="pl-2 relative before:absolute before:w-10 before:h-full before:border-b before:border-error text">
        <h4 className="uppercase text-accent">featured</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {products?.data.slice(0, 8)?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          );
        })}
      </div>
      <div className="rounded-2xl bg-amazonNeutral hover:bg-amazonAccent duration-100 my-2 py-0.5 text-white">
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
