"use client";

import { useState } from "react";

import { useMyLearningStore } from "@features/my-learning/model/use-my-learning-store";
import { fetchSchools } from "@features/my-learning/profile/api/fetch-schools";
import type { School } from "@features/my-learning/profile/model/school.types";
import { SchoolSearchView } from "@features/my-learning/profile/ui/school-search/school-search-view";

export const SchoolSearch = () => {
  const [query, setQuery] = useState("");
  const [schools, setSchools] = useState<School[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setProfileField = useMyLearningStore((state) => state.setProfileField);

  const handleSearch = async () => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 2) {
      setErrorMessage("학교명을 두 글자 이상 입력해 주세요.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      setSchools(await fetchSchools(trimmedQuery));
      setHasSearched(true);
    } catch {
      setSchools([]);
      setHasSearched(true);
      setErrorMessage("학교 검색 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSchoolSelect = (school: School, close: () => void) => {
    setProfileField("school", school.name);
    close();
  };

  const viewProps = {
    query,
    schools,
    hasSearched,
    isLoading,
    errorMessage,
    onQueryChange: setQuery,
    onSearch: handleSearch,
    onSchoolSelect: handleSchoolSelect,
  };

  return <SchoolSearchView {...viewProps} />;
};
