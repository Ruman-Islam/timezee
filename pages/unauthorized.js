import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const UnauthorizedScreen = () => {
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="Unauthorized Page">
      <div className="h-[50vh] flex flex-col justify-center">
        <h1 className="text-xl text-accent text-center">Access Denied</h1>
        {message && (
          <div className="mb-4 text-error text-center">{message}</div>
        )}
      </div>
    </Layout>
  );
};

export default UnauthorizedScreen;
