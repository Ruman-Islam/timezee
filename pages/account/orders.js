import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import CustomButton from "@/components/UI/Button";
import Image from "next/image";

const OrderScreen = ({ orders }) => {

  return (
    <Layout title="Order History">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="Order History" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />
          <div className="p-5 w-full">
            <div className="border-t-2 border-secondary w-full h-[80px] p-4 bg-white rounded shadow-md">
              <h1 className="font-bold">My Orders</h1>
              <h2>Your Total Order: {orders.length}</h2>
            </div>

            <div className="bg-white w-full my-4 p-4 shadow-md border border-thin rounded-md">
              {orders.length
                ? orders.map((item, index) => (
                    <div className="py-2 mb-4 border-b border-thin" key={index}>
                      <div>
                        <p>
                          Your Order ID:{" "}
                          <span className="font-semibold">{item._id} </span>(
                          {item.orderItems.length} Items)
                        </p>
                        <p>Amount: ${item.totalPrice}</p>
                      </div>
                      <br />
                      <div className="flex gap-x-2">
                        <CustomButton className="text-white bg-accent hover:bg-secondary duration-150 px-5 text-sm py-0.5 uppercase rounded">
                          {item.isPaid ? "Paid" : "Unpaid"}
                        </CustomButton>
                        <CustomButton className="text-white bg-primary hover:bg-secondary duration-150 px-5 text-sm py-0.5 uppercase rounded">
                          {item.isDelivered ? "Delivered" : "On Going"}
                        </CustomButton>
                      </div>
                      <br />
                      <div className="flex flex-wrap gap-2">
                        {item.orderItems.map((order, index) => (
                          <div
                            key={index}
                            className="border border-thin flex flex-col justify-between items-center p-2 capitalize"
                          >
                            <div>
                              <Image
                                src={order.images[0]}
                                width={100}
                                height={100}
                                alt={order.name}
                              />
                            </div>
                            <div className="text-xs text-amazonBlue">
                              {order.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                : "No data"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

OrderScreen.auth = true;
export default OrderScreen;

const getServerSideProps = async () => {
  const res = await fetch(`https://timezee.vercel.app/api/orders/leech`);
  const data = await res.json();

  return {
    props: {
      orders: data,
    },
  };
};

export { getServerSideProps };
