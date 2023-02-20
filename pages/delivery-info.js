import React from "react";
import Layout from "@/components/Layout";

const DeliveryInfoScreen = () => {
  return (
    <Layout title="Delivery Info">
      <div className="w-full 2xl:w-10/12 mx-auto pb-0.5 lg:pb-0">
        <div className="text-center my-5">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="py-6">
            <h3 className="mb-5 bg-accent text-white inline-block p-0.5">
              ঢাকার বাইরে দেশের যেকোনো স্থানের অর্ডারঃ
            </h3>
            <div className="text-sm leading-loose">
              <p>১। দুপুর ৩ টার আগের অর্ডার ঐ দিন কুরিয়ারে পাঠানো হয়।</p>
              <p>
                ২। নুন্যতম ৫০০ টাকার পণ্য কিনলে ক্যাশ অন ডেলিভারি পাওয়া যায় এবং
                ৫০০ টাকার কম হলে আগে বিকাশ করে দিতে হবে।
              </p>
              <p>
                ৩। ক্যাশ অন ডেলিভারি পাওয়ার জন্য অবশ্যই ডেলিভারি চার্জ ১০০ টাকা
                আগে বিকাশ করতে হবে।
              </p>
              <p>
                ৪। আমরা ঢাকার বাইরে সাধারণ ডেলিভারি সুন্দরবন কুরিয়ার এর মাধ্যমে
                করে থাকি এবং হোম ডেলিভারি পেপার-ফ্লাই এর মাধ্যমে করি।
              </p>
            </div>
          </div>
          <div className="py-6">
            <h3 className="mb-5 bg-accent text-white inline-block p-0.5">
              ঢাকার ভেতরে যেকোনো স্থানের অর্ডারঃ
            </h3>
            <div className="text-sm leading-loose">
              <p>
                ১। সব অর্ডার ক্যাশ অন ডেলিভারিতে দেয়া হয় (এক্সপ্রেস ডেলিভারি
                ছাড়া)।
              </p>
              <p>২। সব অর্ডার ২৪-৪৮ ঘণ্টার মধ্যে দেয়ার চেষ্টা করা হয়।</p>
            </div>
          </div>
          <div className="text-xs leading-loose text-error">
            <p>500 টাকার নিচের অর্ডারের জন্য 15 টাকা হ্যান্ডলিং ফি দিতে হবে।</p>
            <p>
              যদি কোনো পণ্যে কোনো সমস্যা দেখা দেয় তাহলে অনুগ্রহ করে আপনাকে পণ্য
              নিয়ে আমাদের অফিসে আসতে হবে
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryInfoScreen;
