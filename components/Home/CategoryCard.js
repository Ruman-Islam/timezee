import Image from "next/image";

const CategoryCard = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="p-3 m-1 max-w-[390px] bg-[#eeeeee] rounded-xl">
      <div className="pb-2 border-b-2 border-b-accent">
        <h2 className="uppercase text-center text-accent">{name}</h2>
      </div>
      <Image src={image} width={500} height={100} alt="" className="w-full" />
    </div>
  );
};

export default CategoryCard;
