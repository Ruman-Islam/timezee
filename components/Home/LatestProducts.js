import Link from "next/link";
import ProductCard from "./ProductCard";

const LatestProducts = ({ products, addToCartHandler }) => {
  return (
    <div className="px-1">
      <div className="pl-2 relative before:absolute before:w-10 before:h-full before:border-b before:border-error">
        <h4 className="uppercase text-accent">LATEST PRODUCTS</h4>
      </div>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
        {products?.slice(0, 6)?.map((product) => {
          return (
            <ProductCard
              key={product.name}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          );
        })}
      </div>
      <div className="rounded-2xl bg-amazonNeutral hover:bg-amazonAccent duration-100 my-2 py-0.5 text-white">
        <Link
          href="/products/latest"
          className="block font-medium text-white text-center uppercase py-1.5 text-sm"
        >
          view more latest products
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
