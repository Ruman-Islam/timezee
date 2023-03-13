import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="w-4/4 h-[420px] p-3 m-1 bg-[#eeeeee] rounded-xl">
      <div>
        <Link href={`/products/${name}`}>
          <div className="pb-2">
            <h2 className="uppercase text-center text-accent text-xs font-semibold">{name}</h2>
          </div>
          <Image
            src={image}
            width={500}
            height={500}
            alt={name}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
