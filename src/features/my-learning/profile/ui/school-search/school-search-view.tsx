import { Activity } from "react";

import { Button, Modal, SearchBar } from "@shared/ui";

import type { School } from "@features/my-learning/profile/model/school.types";
import {
  actions,
  message,
  modalContent,
  resultList,
  schoolButton,
  schoolMeta,
  schoolName,
  searchInput,
  title,
} from "@features/my-learning/profile/ui/school-search/school-search.css";

type SchoolSearchViewProps = {
  query: string;
  schools: School[];
  hasSearched: boolean;
  isLoading: boolean;
  errorMessage: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
  onSchoolSelect: (school: School, close: () => void) => void;
};

export const SchoolSearchView = ({
  query,
  schools,
  hasSearched,
  isLoading,
  errorMessage,
  onQueryChange,
  onSearch,
  onSchoolSelect,
}: SchoolSearchViewProps) => {
  return (
    <Modal triggerText="검색" triggerFullWidth>
      {({ close }) => (
        <div className={modalContent}>
          <h2 className={title}>학교 검색</h2>

          <SearchBar
            value={query}
            onChange={onQueryChange}
            onSubmit={onSearch}
            placeholder="학교명을 입력해 주세요."
            aria-label="학교명 검색"
            className={searchInput}
          />

          <Activity mode={isLoading ? "visible" : "hidden"}>
            <p className={message}>학교를 검색하고 있습니다.</p>
          </Activity>

          <Activity mode={errorMessage ? "visible" : "hidden"}>
            <p className={message}>{errorMessage}</p>
          </Activity>

          <Activity
            mode={
              hasSearched && !isLoading && !errorMessage && schools.length === 0
                ? "visible"
                : "hidden"
            }
          >
            <p className={message}>검색 결과가 없습니다.</p>
          </Activity>

          <Activity
            mode={
              !isLoading && !errorMessage && schools.length > 0
                ? "visible"
                : "hidden"
            }
          >
            <ul className={resultList}>
              {schools.map((school) => (
                <li key={school.code}>
                  <button
                    type="button"
                    className={schoolButton}
                    onClick={() => onSchoolSelect(school, close)}
                  >
                    <span className={schoolName}>{school.name}</span>
                    <span className={schoolMeta}>
                      {school.type} · {school.address}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Activity>

          <div className={actions}>
            <Button type="button" variant="secondary" onClick={close}>
              닫기
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
