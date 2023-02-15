import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="w-4/4 p-3 m-1 bg-[#eeeeee] rounded-xl">
      <div>
        <Link href={`/products/${name}`}>
          <div className="pb-2 border-b-2 border-b-accent">
            <h2 className="uppercase text-center text-accent text-xs font-semibold">{name}</h2>
          </div>
          <Image
            src={image}
            width={500}
            height={100}
            alt={name}
            className="w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
