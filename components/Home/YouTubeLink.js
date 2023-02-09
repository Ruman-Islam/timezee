import Image from "next/image";
import Link from "next/link";
import youtubeImg from "../../public/images/YouTube-500x500.webp";

const YouTubeLink = () => {
  return (
    <div className="h-[150px] flex flex-col justify-center mt-5 mb-5 youTubeLink text-white relative before:absolute before:left-0 before:w-full before:h-full before:bg-[#21323D] before:opacity-50 hover:before:opacity-90 before:duration-100">
      <Link href="/" className="text-center z-10 h-full flex flex-col justify-center">
        <div>
          <div className="flex justify-center">
            <Image src={youtubeImg} alt="youtube" width={40} height={100} />
          </div>
          <div className="font-extrabold">You Tube</div>
          <div className="font-semibold">Visit our You Tube channel</div>
        </div>
      </Link>
    </div>
  );
};

export default YouTubeLink;
