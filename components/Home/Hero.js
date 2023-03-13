import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import img2 from "../../public/images/slideshow-v1.2.webp";
import img3 from "../../public/images/slideshow1.webp";
import img4 from "../../public/images/slideshow2.webp";

const images = [img2, img3, img4];

const Hero = () => {
  return (
    <div className="w-full border-t border-thin">
      <div className="flex justify-between 3xl:h-[81vh]">
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
                  <div className="flex-grow h-full relative">
                    <div className="absolute text-white top-0 bottom-0 hidden md:flex flex-col justify-center">
                      <div className="w-5/12 h-full flex flex-col justify-center bg-amazonNeutral/10 p-3 rounded-md">
                        <div className="ml-20">
                          <h2 className="uppercase text-amazonOrange">
                            Speedmaster
                          </h2>
                          <h1 className="capitalize text-5xl leading-">
                            Moonwatch
                          </h1>
                          <p className="text-sm lg:text-base italic text-grayBackground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                            Veritatis
                          </p>
                          <button className="bg-error px-3 py-1.5 mt-2 rounded">
                            SHOP NOW
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Image
                        className="w-full 3xl:h-[81vh] object-cover"
                        width={3000}
                        height={2000}
                        src={item}
                        alt=""
                      />
                    </div>
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
