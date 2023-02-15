import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import img1 from "../../public/images/slideImg1.webp";
import img2 from "../../public/images/slideImg2.webp";
import img3 from "../../public/images/slideImg3.webp";
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const images = [img1, img2, img3];

const Hero = ({ categories }) => {
  return (
    <div className="w-full px-1">
      <div className="flex justify-between gap-x-2">
        <div className="w-[230px] hidden lg:block  border-r border-thin">
          <ul className="w-full h-full text-accent rounded py-3">
            {categories?.map(({ name }, i) => {
              return (
                <li key={i}>
                  <Link
                    href={`/products/${name}`}
                    className="uppercase text-xs py-1.5 px-3 hover:bg-accent hover:text-white duration-150 flex gap-x-1 items-center"
                  >
                    <KeyboardDoubleArrowRightIcon className="text-error w-4" />
                    {name?.length > 24 ? name?.slice(0, 24) + "..." : name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1">
          <Carousel
            autoplay
            wrapAround
            enableKeyboardControls
            autoplayInterval={5000}
            speed={600}
            zoomScale={0.85}
            animation="zoom"
            transitionMode={["scroll3d"]}
            renderCenterLeftControls={false}
            renderCenterRightControls={false}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "white",
                margin: "5px",
              },
            }}
          >
            {images.map((item, idex) => {
              return (
                <Image
                  className="slider-img rounded-2xl"
                  width={1000}
                  height={600}
                  src={item}
                  key={idex}
                  alt=""
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
