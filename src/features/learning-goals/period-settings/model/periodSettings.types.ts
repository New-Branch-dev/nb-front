import type { SelectorOption } from "@shared/ui";

export type PeriodSettingsDraftKey = "memorization" | "retrieval" | "otherLearning";

export type PeriodSettingsPanelConfig = {
  ariaLabel: string;
  periodTitle: string;
  reviewCountTitle: string;
  methodTitle: string;
  methodItems: readonly string[];
  reviewCountOptions: readonly SelectorOption[];
  reviewCountFieldName: string;
  reviewCountAriaLabel: string;
  startDateFieldId: string;
  endDateFieldId: string;
  methodDirectInputName: string;
  methodDirectInputPlaceholder: string;
  draftKey: PeriodSettingsDraftKey;
};
