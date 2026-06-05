import type { School } from "../model/school.types";

import "server-only";

type NeisSchoolRow = {
  SD_SCHUL_CODE: string;
  SCHUL_NM: string;
  SCHUL_KND_SC_NM: string;
  ORG_RDNMA: string;
};

type NeisSchoolInfo = {
  row?: NeisSchoolRow[];
};

type NeisResponse = {
  schoolInfo?: NeisSchoolInfo[];
};

const SCHOOL_TYPES = new Set(["초등학교", "중학교", "고등학교"]);

const toSchool = (school: NeisSchoolRow): School => ({
  code: school.SD_SCHUL_CODE,
  name: school.SCHUL_NM,
  type: school.SCHUL_KND_SC_NM,
  address: school.ORG_RDNMA,
});

export const searchSchoolsFromNeis = async (query: string) => {
  const url = new URL("https://open.neis.go.kr/hub/schoolInfo");
  const apiKey = process.env.NEIS_API_KEY;

  url.searchParams.set("Type", "json");
  url.searchParams.set("pIndex", "1");
  url.searchParams.set("pSize", apiKey ? "20" : "5");
  url.searchParams.set("SCHUL_NM", query);

  if (apiKey) {
    url.searchParams.set("KEY", apiKey);
  }

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("학교 정보를 불러오지 못했습니다.");
  }

  const data = (await response.json()) as NeisResponse;

  return (
    data.schoolInfo
      ?.flatMap((schoolInfo) => schoolInfo.row ?? [])
      .filter((school) => SCHOOL_TYPES.has(school.SCHUL_KND_SC_NM))
      .map(toSchool) ?? []
  );
};
