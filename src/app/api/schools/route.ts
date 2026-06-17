import { fetchSchoolsFromNeis } from "@features/my-learning/profile/api/fetch-schools-from-neis";

export const GET = async (request: Request) => {
  const query = new URL(request.url).searchParams.get("query")?.trim() ?? "";

  if (query.length < 2) {
    return Response.json(
      { message: "학교명을 두 글자 이상 입력해 주세요." },
      { status: 400 },
    );
  }

  try {
    const schools = await fetchSchoolsFromNeis(query);

    return Response.json({ schools });
  } catch {
    return Response.json(
      { message: "학교 정보를 불러오지 못했습니다." },
      { status: 502 },
    );
  }
};
