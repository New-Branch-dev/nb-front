"use client";

import { Activity, useState } from "react";

import { LinkTab, SearchBar, Tab } from "@shared/ui";

import { LEARNING_GOALS_LIST_HREF } from "@features/learning-goals/model/routes";
import {
  LEARNING_GOALS_LIST_SORT_ITEMS,
  type LearningGoalsListSortKey,
} from "@features/learning-goals/tab-scope/model/learningGoalsListSort.consts";
import type { LearningGoalsListCreateTab } from "@features/learning-goals/tab-scope/model/learningGoalsTab.types";
import {
  tabWrap,
  toolbar,
  toolbarCenter,
  toolbarCreate,
  toolbarEnd,
  toolbarList,
  toolbarStart,
} from "@features/learning-goals/tab-scope/ui/LearningGoalsTabRail.css";

export type LearningGoalsTabRailProps = {
  activeTab: LearningGoalsListCreateTab;
  createHref: string;
};

const buildNavItems = (createHref: string) =>
  [
    { value: "list" as const, label: "내 학습 목표", href: LEARNING_GOALS_LIST_HREF },
    { value: "create" as const, label: "새로 만들기", href: createHref },
  ] as const;

export const LearningGoalsTabRail = ({
  activeTab,
  createHref,
}: LearningGoalsTabRailProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<LearningGoalsListSortKey>("latest");

  const isListTab = activeTab === "list";
  const navItems = buildNavItems(createHref);

  return (
    <div className={`${toolbar} ${isListTab ? toolbarList : toolbarCreate}`}>
      <div className={toolbarStart}>
        <div className={tabWrap}>
          <LinkTab
            aria-label="학습 목표 보기 전환"
            items={navItems}
            value={activeTab}
            size="toolbar"
            fullWidth={false}
          />
        </div>
      </div>

      <Activity mode={isListTab ? "visible" : "hidden"}>
        <div className={toolbarCenter}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            aria-label="학습 목표 검색"
          />
        </div>
      </Activity>

      <Activity mode={isListTab ? "visible" : "hidden"}>
        <div className={toolbarEnd}>
          <Tab
            aria-label="학습 목표 정렬"
            items={LEARNING_GOALS_LIST_SORT_ITEMS}
            value={sortBy}
            onValueChange={setSortBy}
            size="toolbarSort"
            fullWidth={false}
            listTone="surface"
          />
        </div>
      </Activity>
    </div>
  );
};
