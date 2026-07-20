import {
  createApi,
  deleteApi,
  fetchAccessToken,
  getApiErrorMessage,
  logApiError,
  updateApi,
} from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import type { FormState } from "@features/my-learning/model/store.types";

export type MyLearningStepsRequestBody = {
  usersId: number;
  nickname: string;
  schoolName: string;
  preferredStudyTime: string;
  offDays: string;
  preferredMaterialFormat: string;
  preferredClassStyle: string;
  preferredStudyMethod: string;
  preferredTeacherStyle: string;
  preferredFriendStyle: string;
  extraNotes: string;
  learningStyle: string;
  recommendedMethod: string;
};

export type CreateMyLearningStepsResponse = {
  id?: string | number;
  myLearningId?: string | number;
  isConfigured?: boolean;
};

export type UpdateMyLearningStepsResponse = CreateMyLearningStepsResponse;

export type DeleteMyLearningStepsResponse = void;

const convertSelectedValueListToRequestValue = (valueList: string[]) =>
  valueList.join(",");

const createAuthenticatedRequestConfig = () => {
  const accessToken = fetchAccessToken();

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export const buildMyLearningStepsRequestBody = ({
  form,
  usersId = 0,
}: {
  form: FormState;
  usersId?: number;
}): MyLearningStepsRequestBody => {
  const {
    aiAnalysis,
    learningPattern,
    learningType,
    preferredPartner,
    profile,
  } = form;

  return {
    usersId,
    nickname: profile.nickname,
    schoolName: profile.school,
    preferredStudyTime: "",
    offDays: "",
    preferredMaterialFormat: convertSelectedValueListToRequestValue(
      learningType.materialFormats,
    ),
    preferredClassStyle: convertSelectedValueListToRequestValue(
      learningType.classStyles,
    ),
    preferredStudyMethod: convertSelectedValueListToRequestValue(
      learningType.learningMethods,
    ),
    preferredTeacherStyle: convertSelectedValueListToRequestValue(
      preferredPartner.teacherStyles,
    ),
    preferredFriendStyle: convertSelectedValueListToRequestValue(
      preferredPartner.teamMemberStyles,
    ),
    extraNotes: [
      ...learningPattern.interests,
      ...learningPattern.strengths,
      ...learningPattern.personality,
      ...learningPattern.learningTendencies,
    ].join(","),
    learningStyle: convertSelectedValueListToRequestValue(
      aiAnalysis.learningStyles,
    ),
    recommendedMethod: convertSelectedValueListToRequestValue(
      aiAnalysis.recommendedMethods,
    ),
  };
};

export const createMyLearningSteps = async (
  form: FormState,
): Promise<CreateMyLearningStepsResponse> => {
  try {
    return await createApi<
      CreateMyLearningStepsResponse,
      MyLearningStepsRequestBody
    >(
      API_ENDPOINT.myLearning.create,
      buildMyLearningStepsRequestBody({ form }),
      createAuthenticatedRequestConfig(),
    );
  } catch (error) {
    logApiError(error, "학습 프로필 설정 생성 실패");

    throw new Error(
      getApiErrorMessage(error, "학습 프로필 설정 생성에 실패했습니다."),
    );
  }
};

export const updateMyLearningSteps = async (
  usersId: number,
  form: FormState,
): Promise<UpdateMyLearningStepsResponse> => {
  try {
    return await updateApi<
      UpdateMyLearningStepsResponse,
      MyLearningStepsRequestBody
    >(
      API_ENDPOINT.myLearning.update(usersId),
      buildMyLearningStepsRequestBody({ form, usersId }),
      createAuthenticatedRequestConfig(),
    );
  } catch (error) {
    logApiError(error, "학습 프로필 설정 수정 실패");

    throw new Error(
      getApiErrorMessage(error, "학습 프로필 설정 수정에 실패했습니다."),
    );
  }
};

export const deleteMyLearningSteps = async (
  usersId: number,
): Promise<DeleteMyLearningStepsResponse> => {
  try {
    await deleteApi(
      API_ENDPOINT.myLearning.delete(usersId),
      createAuthenticatedRequestConfig(),
    );
  } catch (error) {
    logApiError(error, "학습 프로필 설정 삭제 실패");

    throw new Error(
      getApiErrorMessage(error, "학습 프로필 설정 삭제에 실패했습니다."),
    );
  }
};
