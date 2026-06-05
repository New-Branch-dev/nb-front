import type { SchoolSearchResponse } from "../model/school.types";

export const searchSchools = async (query: string) => {
  const response = await fetch(`/api/schools?query=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error("학교 검색 중 오류가 발생했습니다.");
  }

  const data = (await response.json()) as SchoolSearchResponse;

  return data.schools;
};
