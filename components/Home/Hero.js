import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import img1 from "../../public/images/slideImg1.webp";
import img2 from "../../public/images/slideImg2.webp";
import img3 from "../../public/images/slideImg3.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [img1, img2, img3];

const Hero = () => {
  return (
    <div className="w-full px-1">
      <div className="flex justify-between gap-x-2">
        <div className="w-[230px] hidden lg:block bg-base border-r border-thin">
          <ul className="w-full text-accent rounded py-3 px-1">
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Special Offers
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Accessories
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Drones & RC
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Electrical Accessories
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                MCU & Computers
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Sound System
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Socket, port & Jacks
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                SMD Components
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Active Components
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                Passive Components
              </Link>
            </li>
            <li className="px-3 py-2 hover:bg-grayBackground flex items-center text-sm">
              <FontAwesomeIcon
                icon={faArrowRight}
                width={10}
                height={10}
                className="text-error"
              />
              <Link href="/" className="px-2 w-full">
                3D Printer & CNC
              </Link>
            </li>
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
                  width={600}
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
