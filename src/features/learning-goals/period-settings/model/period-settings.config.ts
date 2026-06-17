import { REVIEW_COUNT_OPTIONS } from "@features/learning-goals/lib/reviewCountOptions";
import { MEMORIZATION_METHOD_ITEMS } from "@features/learning-goals/memorization/model/consts";
import { OTHER_LEARNING_METHOD_ITEMS } from "@features/learning-goals/other-learning/model/consts";
import type { PeriodSettingsConfig } from "@features/learning-goals/period-settings/model/period-settings.types";
import { RETRIEVAL_METHOD_ITEMS } from "@features/learning-goals/retrieval/model/consts";

export const MEMORIZATION_PERIOD_CONFIG: PeriodSettingsConfig = {
  ariaLabel: "암기 설정",
  periodTitle: "암기기간",
  reviewCountTitle: "암기횟수",
  methodTitle: "암기방법",
  methodItems: MEMORIZATION_METHOD_ITEMS,
  reviewCountOptions: REVIEW_COUNT_OPTIONS,
  reviewCountFieldName: "learning-goals-memorization-review-count",
  reviewCountAriaLabel: "암기 횟수",
  startDateFieldId: "learning-goals-memorization-start-date",
  endDateFieldId: "learning-goals-memorization-end-date",
  methodDirectInputName: "learning-goals-memorization-method-direct",
  methodDirectInputPlaceholder: "암기 방법을 입력해 주세요",
};

export const RETRIEVAL_PERIOD_CONFIG: PeriodSettingsConfig = {
  ariaLabel: "인출 설정",
  periodTitle: "인출기간",
  reviewCountTitle: "인출횟수",
  methodTitle: "인출방법",
  methodItems: RETRIEVAL_METHOD_ITEMS,
  reviewCountOptions: REVIEW_COUNT_OPTIONS,
  reviewCountFieldName: "learning-goals-retrieval-review-count",
  reviewCountAriaLabel: "인출 횟수",
  startDateFieldId: "learning-goals-retrieval-start-date",
  endDateFieldId: "learning-goals-retrieval-end-date",
  methodDirectInputName: "learning-goals-retrieval-method-direct",
  methodDirectInputPlaceholder: "인출 방법을 입력해 주세요",
};

export const OTHER_LEARNING_PERIOD_CONFIG: PeriodSettingsConfig = {
  ariaLabel: "기타학습 설정",
  periodTitle: "기타학습기간",
  reviewCountTitle: "기타학습횟수",
  methodTitle: "기타학습방법",
  methodItems: OTHER_LEARNING_METHOD_ITEMS,
  reviewCountOptions: REVIEW_COUNT_OPTIONS,
  reviewCountFieldName: "learning-goals-other-learning-review-count",
  reviewCountAriaLabel: "기타학습 횟수",
  startDateFieldId: "learning-goals-other-learning-start-date",
  endDateFieldId: "learning-goals-other-learning-end-date",
  methodDirectInputName: "learning-goals-other-learning-method-direct",
  methodDirectInputPlaceholder: "기타학습 방법을 입력해 주세요",
};
