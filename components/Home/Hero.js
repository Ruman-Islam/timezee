import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import img1 from "../../public/images/banner1.png";
import img2 from "../../public/images/banner2.png";
import img3 from "../../public/images/banner3.png";

const images = [img2, img1, img3];

const Hero = () => {
  return (
    <div className="w-full border-t border-thin">
      <div className="flex justify-between">
        <div>
          <Carousel
            autoplay
            wrapAround
            enableKeyboardControls
            autoplayInterval={5000}
            speed={1000}
            renderCenterLeftControls={false}
            renderCenterRightControls={false}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "white",
                alignItems: "center",
              },
            }}
          >
            {images.map((item, i) => {
              return (
                <div key={i}>
                  <Image
                    className="w-full 2xl-h-[770px]"
                    width={3000}
                    height={2000}
                    src={item}
                    alt=""
                  />
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
