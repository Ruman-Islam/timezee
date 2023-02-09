import useWindowDimensions from "@/hooks/useWindowDimensions";
import Carousel from "nuka-carousel/lib/carousel";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { width } = useWindowDimensions();
  const [cardToShow, setCardToShow] = useState(5);

  useEffect(() => {
    if (width >= 1536) {
      setCardToShow(5);
    } else if (width >= 1280) {
      setCardToShow(4);
    } else if (width >= 1023) {
      setCardToShow(4);
    } else if (width >= 768) {
      setCardToShow(3);
    } else if (width >= 640) {
      setCardToShow(2);
    } else {
      setCardToShow(1);
    }
  }, [width]);

  return (
    <div className="mb-5">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className=" pb-3 mb-2 relative before:absolute before:w-16 before:h-full before:border-b before:border-[#21323D] before:left-0 before:right-0 before:mx-auto">
          <h3 className="text-3xl font-extrabold text-[#21323D]">Categories</h3>
        </div>
        <div>
          <span className="text-[#21323D] text-sm">
            Find the product you are looking for.
          </span>
        </div>
      </div>
      <div className="mb-10 mx-auto w-[350px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-full">
        <Carousel
          slidesToShow={cardToShow}
          wrapAround
          enableKeyboardControls
          autoplayInterval={5000}
          speed={600}
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
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
