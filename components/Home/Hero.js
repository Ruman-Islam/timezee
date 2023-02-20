import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import img2 from "../../public/images/slideshow-v1.2.webp";
import img3 from "../../public/images/slideshow1.webp";
import img4 from "../../public/images/slideshow2.webp";
// import Link from "next/link";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const images = [img2, img3, img4];

const Hero = ({ brands }) => {
  return (
    <div className="w-full border-t border-thin">
      <div className="flex justify-between 3xl:h-[81vh]">
        {/* <div className="min-w-[200px] hidden lg:block">
          <h3 className="uppercase text-amazonOrange ml-3.5 font-semibold mt-2">Brands</h3>
          <ul className="w-full h-full text-accent rounded">
            {brands?.map(({ name }, i) => {
              return (
                <li key={i} className="group">
                  <Link
                    href={`/products/${name}`}
                    className="uppercase text-xs py-1.5 px-3 hover:bg-amazonNeutral  hover:text-white  flex gap-x-1 items-center duration-150"
                  >
                    <KeyboardDoubleArrowRightIcon className="w-4 group-hover:text-amazonOrange duration-150" />
                    {name?.length > 20 ? name?.slice(0, 20) + "..." : name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className="flex-grow h-full">
          <Carousel
            autoplay
            wrapAround
            enableKeyboardControls
            autoplayInterval={5000}
            speed={600}
            renderCenterLeftControls={false}
            renderCenterRightControls={false}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "white",
              },
            }}
          >
            {images.map((item, i) => {
              return (
                <div className="flex" key={i}>
                  <div className="flex-grow h-full">
                    <Image
                      className="w-full 3xl:h-[81vh] object-cover"
                      width={3000}
                      height={2000}
                      src={item}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
