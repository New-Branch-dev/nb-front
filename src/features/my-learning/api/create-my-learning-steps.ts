import type { FormState } from "../model/store.types";

export type CreateMyLearningStepsRequest = FormState;

export type CreateMyLearningStepsResponse = {
  id: string;
  isConfigured: boolean;
};

export const createMyLearningSteps = async (
  request: CreateMyLearningStepsRequest,
): Promise<CreateMyLearningStepsResponse> => {
  void request;

  throw new Error("나만의 학습 등록 API가 아직 연결되지 않았습니다.");
};
