import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="text-3xl">WElcome</h1>
      <h1 className="font-space-grotesk text-3xl">WElcome gg</h1>
    </>
  );
};

export default Home;
