import AccountSidebar from "@/components/Account/AccountSidebar";
import AccountWizard from "@/components/Account/AccountWizard";
import Layout from "@/components/Layout";
import Form from "@/components/UI/Form";
import { editProfileFormValues } from "@/constants/common";
import { useEffect, useState } from "react";

const EditProfile = ({ user }) => {
  const [editProfileValues, setEditProfileValues] = useState(
    editProfileFormValues
  );

  useEffect(() => {
    setEditProfileValues([
      { ...editProfileValues[0], defaultValue: user?.name },
      { ...editProfileValues[1], defaultValue: user?.address },
      { ...editProfileValues[2], defaultValue: user?.phone },
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Edit Profile">
      <div className="max-w-screen-xl mx-auto pb-0.5 lg:pb-0">
        <AccountWizard title="My Account" />
        <div className="flex flex-col lg:flex-row gap-x-2">
          <AccountSidebar />

          <div className="w-full p-5">
            <div className="relative before:absolute before:w-10 before:h-full before:border-b before:border-amazonOrange pb-1 mt-10">
              <h4 className="uppercase">YOUR PERSONAL DETAILS</h4>
            </div>
            <Form arrayData={editProfileValues} buttonText="Update" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  const user = await res.json();

  return {
    props: {
      user: user,
    },
  };
};

export { getServerSideProps };

EditProfile.auth = true;
export default EditProfile;
