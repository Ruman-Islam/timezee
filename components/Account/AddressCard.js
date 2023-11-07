import Link from "next/link";
import { toast } from "react-toastify";
import CustomButton from "../UI/Button";

const AddressCard = ({ data }) => {
  const { name, address, city, country } = data;

  const handleChangeAddress = () => {
    return toast.error("CRUD operation disabled!");
  };

  return (
    <div className="p-5 mb-5 shadow-md rounded-lg border border-thin hover:bg-amazonGray bg-white">
      <div className="flex-grow p-2 text-accent text-sm flex flex-col gap-2">
        <p>
          <span className="font-bold">Name: </span>
          {name}
        </p>
        <p>
          <span className="font-bold">Address: </span> {address}
        </p>
        <p>
          <span className="font-bold">City: </span> {city}
        </p>
        <p>
          <span className="font-bold">Country: </span> {country}
        </p>
      </div>
      <div className="p-3 flex gap-x-2 uppercase text-xs w-full justify-end">
        <CustomButton
          className="text-white bg-accent hover:bg-secondary duration-150 px-5 py-1 uppercase"
        >
          <Link href="/account/address/edit">Edit</Link>
        </CustomButton>
        <CustomButton
          onClick={handleChangeAddress}
          className="text-white bg-error hover:bg-secondary duration-150 px-5 py-1 uppercase"
        >
          delete
        </CustomButton>
      </div>
    </div>
  );
};

export default AddressCard;
