import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import CustomButton from "@/components/UI/Button";
import data from "../../utils/data";
import { useState } from "react";

const WishlistScreen = () => {
  const [products, setProducts] = useState([...data.products?.slice(0, 3)]);

  const removeItemHandler = (product) => {
    setProducts(products.filter((item) => item.id !== product.id));
  };

  return (
    <Layout title="Wishlist">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Wishlist" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="p-5 w-full">
            <table className="w-full">
              <thead className="bg-amazonGray uppercase text-[11px] text-amazonNeutral border-l border-r border-thin">
                <tr className="font-extrabold">
                  <th className="px-5 text-left">Image</th>
                  <th className="text-left">product name</th>
                  <th className="text-left hidden md:table-cell">model</th>
                  <th className="py-5 text-left hidden md:table-cell">price</th>
                  <th className="py-5 text-left hidden md:table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.length
                  ? products.map((item) => {
                      return (
                        <tr
                          key={item?._id}
                          className="border border-b border-l border-r border-thin text-[12px] bg-white text-amazonNeutral"
                        >
                          <td className="p-4">
                            <Link href={`/product/${item._id}`}>
                              <Image
                                src={item.images[0]}
                                alt={item.name}
                                width={50}
                                height={50}
                              />
                            </Link>
                          </td>
                          <td>
                            <Link
                              href={`/product/${item._id}`}
                              className="text-amazonBlue hover:text-amazonOrange leading-snug inline-block uppercase"
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td className="hidden md:table-cell">{item.model}</td>
                          <td className="hidden md:table-cell">
                            ${item.sellPrice}
                          </td>
                          <td className="hidden md:table-cell">
                            <CustomButton
                              onClick={() => removeItemHandler(item)}
                              className="bg-error hover:bg-secondary duration-150 px-1 text-lg ml-2"
                            >
                              <CloseIcon
                                style={{ color: "white", fontSize: "15px" }}
                              />
                            </CustomButton>
                          </td>
                        </tr>
                      );
                    })
                  : "No data"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

WishlistScreen.auth = true;
export default WishlistScreen;
