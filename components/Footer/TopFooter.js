import Link from "next/link";

const TopFooter = () => {
  return (
    <div className="flex justify-center text-center bg-amazonNeutral py-6">
      {/* <div>
        <div className="text-amazonOrangeLite font-semibold p-2 relative after:absolute after:content-[''] after:border after:w-12 after:left-0 after:right-0 after:mx-auto mb-2">
          <p>MY ACCOUNT</p>
        </div>
        <div className="text-sm text-white">
          <div>
            <Link className="hover:text-error duration-75" href="/">
              Account
            </Link>
          </div>
          <div>
            <Link className="hover:text-error duration-75" href="/">
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}
      <div>
        <div className="text-amazonOrangeLite font-semibold p-2 relative after:absolute after:content-[''] after:border after:w-12 after:left-0 after:right-0 after:mx-auto mb-2">
          <p>ABOUT US</p>
        </div>
        <div className="text-white text-sm max-w-screen-md">
          <p>
            Timezee one of the largest Online watch Store in
            Bangladesh. We stock a huge selection of watch products from
            passive components right through to Drones and robots and all
            accessories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
