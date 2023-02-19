import Image from "next/image";
import nogodImg from "../../public/images/nogod-round-500x500.webp";
import bkashImg from "../../public/images/BKASH-round-500x500.webp";
import rocketImg from "../../public/images/Rocket-round-500x500.webp";
import dbblImg from "../../public/images/dbbl-500x500.webp";
import visaImg from "../../public/images/visa0r-500x500.webp";
import masterCardImg from "../../public/images/master-card-round-500x500.webp";
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MidFooter = () => {
  return (
    <div className="py-8 bg-amazonAccent">
      <div className="max-w-[850px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-x-4">
          <div className="flex gap-x-2 group">
            <div>
              <div className="w-12 h-12 bg-amazonOrange group-hover:bg-amazonNeutral rounded-full flex justify-center items-center">
                <PlaceIcon
                  className="text-white"
                />
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-amazonOrange font-semibold text-lg mb-1">
                SHOP LOCATION
              </h3>
              <p className="leading-snug text-xs">
                Electronics.Com.BD Shop 440 & 441, 3rd Floor, Farm view Supper
                Market, Farmget, Dhaka 1215
              </p>
            </div>
          </div>
          <div href="tel:+44-785-7895" className="flex gap-x-2 group">
            <div>
              <div className="w-12 h-12 bg-amazonOrange group-hover:bg-amazonNeutral rounded-full flex justify-center items-center">
                <LocalPhoneIcon
                  className="text-white"
                />
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-amazonOrange font-semibold text-lg mb-1">
                CALL US
              </h3>
              <p className="text-xs">Store: +88001536160661</p>
              <p className="text-xs">Delivery: +88001536160661</p>
            </div>
          </div>
          <div className="flex gap-x-2 group">
            <div>
              <div className="w-12 h-12 bg-amazonOrange group-hover:bg-amazonNeutral rounded-full flex justify-center items-center">
                <AccessTimeIcon
                  className="text-white"
                />
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-amazonOrange font-semibold text-lg mb-1">
                STORE HOURS
              </h3>
              <p className="text-xs">Saturday - Friday 10:00AM - 07:30PM</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-amazonNeutral font-semibold p-2 relative after:absolute after:content-[''] after:border after:w-16 after:left-0 after:right-0 after:mx-auto my-5 text-center">
            <p>ACCEPTED PAYMENT METHODS</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 w-fit mx-auto">
            <Image src={nogodImg} alt="" width={60} height={100} />
            <Image src={bkashImg} alt="" width={60} height={100} />
            <Image src={rocketImg} alt="" width={60} height={100} />
            <Image src={dbblImg} alt="" width={60} height={100} />
            <Image src={visaImg} alt="" width={60} height={100} />
            <Image src={masterCardImg} alt="" width={60} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidFooter;
