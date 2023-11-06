import Link from "next/link";
import { toast } from "react-toastify";

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
        <Link
          href="/account/address/edit"
          className="text-white bg-accent hover:bg-primary duration-150 px-5 py-1"
        >
          Edit
        </Link>
        <button
          onClick={handleChangeAddress}
          className="text-white bg-error hover:bg-secondary duration-150 px-5 py-1 uppercase"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
