import { VerifyEmailPage } from "@views/auth";

type VerifyEmailRoutePageProps = {
  searchParams: Promise<{
    token?: string | string[];
  }>;
};

const VerifyEmailRoutePage = async ({
  searchParams,
}: VerifyEmailRoutePageProps) => {
  const { token } = await searchParams;
  const verificationToken = Array.isArray(token) ? token[0] : token ?? "";

  return <VerifyEmailPage token={verificationToken} />;
};

export default VerifyEmailRoutePage;
