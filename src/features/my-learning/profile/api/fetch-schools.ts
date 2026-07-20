import { API_ENDPOINT } from "@shared/config";

import type { SchoolSearchResponse } from "@features/my-learning/profile/model/school.types";

export const fetchSchools = async (query: string) => {
  const response = await fetch(API_ENDPOINT.schools.search(query));

  if (!response.ok) {
    throw new Error("학교 검색 중 오류가 발생했습니다.");
  }

  const data = (await response.json()) as SchoolSearchResponse;

  return data.schools;
};
