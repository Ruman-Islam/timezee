import facebookImg from "../../public/images/Facebook-500x500.webp";
import youtubeImg from "../../public/images/YouTube-500x500.webp";
import instaImg from "../../public/images/Instagram-500x500.webp";
import Image from "next/image";

const BottomFooter = () => {
  return (
    <div className="flex flex-col justify-end h-[12vh] bg-amazonAccent">
      <div className="flex w-fit mx-auto mb-2">
        <div className="flex gap-x-2 w-fit mx-auto">
          <Image src={facebookImg} alt="" width={30} height={100} />
          <Image src={youtubeImg} alt="" width={30} height={100} />
          <Image src={instaImg} alt="" width={30} height={100} />
        </div>
      </div>
      <div className="text-center text-base">
        <small>Copyright © 2021, Electronics.Com.BD, All Rights Reserved</small>
      </div>
    </div>
  );
};

export default BottomFooter;
