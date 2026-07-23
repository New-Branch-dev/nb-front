import { cookies } from "next/headers";

import { MainPage } from "@views/main";

const MainRoutePage = async () => {
  const cookieStore = await cookies();
  const nickname = cookieStore.get("nickname")?.value ?? "사용자";

  return <MainPage nickname={nickname} />;
};

export default MainRoutePage;
