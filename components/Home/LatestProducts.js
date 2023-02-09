import ProductCard from "./ProductCard";
import img1 from "../../public/images/1000KV-Brushless-Motor-A2212-13T-1000KV-Brushless-Motor-A2212-13T-Price-in-online-BD-Bangladesh-250x250.webp";
import img2 from "../../public/images/1000KV-Brushless-Motor-A2212-13T-1000KV-Brushless-Motor-A2212-13T-Price-in-online-BD-Bangladesh-1-250x250.webp";
import img3 from "../../public/images/1.webp";
import img4 from "../../public/images/11.webp";
import img5 from "../../public/images/2.webp";
import img6 from "../../public/images/22.webp";
import img7 from "../../public/images/3.webp";
import img8 from "../../public/images/33.webp";
import img9 from "../../public/images/99.webp";
import img10 from "../../public/images/1010.webp";
import Link from "next/link";

const images = [
  { img1: img1, img2: img2 },
  { img1: img3, img2: img4 },
  { img1: img5, img2: img6 },
  { img1: img7, img2: img8 },
  { img1: img9, img2: img10 },
  { img1: img7, img2: img8 },
];

const LatestProducts = () => {
  return (
    <div className="px-1 xl:px-10">
      <div className="pl-2 relative before:absolute before:w-10 before:h-full before:border-b before:border-error">
        <h4 className="uppercase text-accent">LATEST PRODUCTS</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {images.map(({ img1, img2 }, index) => {
          return <ProductCard key={index} img1={img1} img2={img2} />;
        })}
      </div>
      <div className="rounded-2xl bg-accent hover:bg-neutral duration-100 my-2 py-0.5 text-base">
        <Link
          href="/"
          className="block font-medium text-white text-center uppercase py-1.5 text-sm"
        >
          view more latest products
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
