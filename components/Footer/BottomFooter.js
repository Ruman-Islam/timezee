import facebookImg from "../../public/images/Facebook-500x500.webp";
import youtubeImg from "../../public/images/YouTube-500x500.webp";
import instaImg from "../../public/images/Instagram-500x500.webp";
import Image from "next/image";

const BottomFooter = () => {
  return (
    <div className="flex flex-col justify-end h-[12vh] bg-amazonAccent">
      <div className="flex w-fit mx-auto mb-2">
        <div className="flex gap-x-2 w-fit mx-auto">
          <Image
            title="Facebook"
            src={facebookImg}
            alt="Facebook"
            width={30}
            height={100}
          />

          <Image
            title="Youtube"
            src={youtubeImg}
            alt="Youtube"
            width={30}
            height={100}
          />
          <Image
            title="Instagram"
            src={instaImg}
            alt="Instagram"
            width={30}
            height={100}
          />
        </div>
      </div>
      <div className="text-center text-base">
        <small>Copyright © 2021, timezee.com, All Rights Reserved</small>
      </div>
    </div>
  );
};

export default BottomFooter;
