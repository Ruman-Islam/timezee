import Link from "next/link";

const TopFooter = () => {
  return (
    <div className="grid lg:grid-cols-2 text-center pt-2">
      <div>
        <div className="text-success font-semibold p-2 relative after:absolute after:content-[''] after:border after:w-12 after:left-0 after:right-0 after:mx-auto mb-2">
          <p>MY ACCOUNT</p>
        </div>
        <div className="text-sm text-base">
          <div>
            <Link className="hover:text-red-600" href="/">
              Account
            </Link>
          </div>
          <div>
            <Link className="hover:text-red-600" href="/">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="m-10 mt-0">
        <div className="text-success font-semibold p-2 relative after:absolute after:content-[''] after:border after:w-12 after:left-0 after:right-0 after:mx-auto mb-2">
          <p>ABOUT US</p>
        </div>
        <div className="text-base text-sm">
          <p>
            Electronics BD one of the largest Online Electronics Store in
            Bangladesh. We stock a huge selection of Electronics products from
            passive components right through to Drones and robots and all
            accessories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
