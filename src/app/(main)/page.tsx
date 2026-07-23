import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { RendingPage } from "@views/rending";

const Home = async () => {
  const cookieStore = await cookies();
  const hasAccessToken = Boolean(cookieStore.get("accessToken")?.value);

  if (hasAccessToken) {
    redirect("/main");
  }

  return <RendingPage />;
};

export default Home;
