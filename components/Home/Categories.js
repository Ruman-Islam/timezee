import { useEffect, useState } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  const { width } = useWindowDimensions();
  const [cardToShow, setCardToShow] = useState(5);

  useEffect(() => {
    if (width >= 1800) {
      setCardToShow(5);
    } else if (width >= 1400) {
      setCardToShow(4);
    } else if (width >= 1300) {
      setCardToShow(3);
    } else if (width >= 1000) {
      setCardToShow(2);
    } else if (width >= 450) {
      setCardToShow(1);
    } else if (width >= 350) {
      setCardToShow(1);
    }
  }, [width, cardToShow]);

  return (
    <div className="mb-5">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className=" pb-3 mb-2 relative before:absolute before:w-16 before:h-full before:border-b before:border-accent before:left-0 before:right-0 before:mx-auto">
          <h3 className="text-3xl font-extrabold text-accent">Categories</h3>
        </div>
        <div>
          <span className="text-accent text-sm">
            Find the product you are looking for.
          </span>
        </div>
      </div>
      <div className="max-w-[350px] md:max-w-[450px] lg:max-w-[1000px] xl:max-w-[1300px] 2xl:max-w-[1400px] 3xl:max-w-[1800px] mx-auto">
        <Carousel
          slidesToShow={cardToShow}
          wrapAround
          enableKeyboardControls
          transitionMode={["scroll3d"]}
          renderCenterLeftControls={false}
          renderCenterRightControls={false}
          defaultControlsConfig={{
            pagingDotsContainerClassName: "category-carousel-dots",
            pagingDotsStyle: {
              fill: "black",
              margin: "5px",
            },
          }}
        >
          {categories?.map((category, i) => {
            return <CategoryCard key={i} category={category} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
