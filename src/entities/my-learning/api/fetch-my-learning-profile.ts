import { fetchApi } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import { convertMyLearningProfile } from "@entities/my-learning/api/convert-my-learning-profile-response";
import type { MyLearningProfileDto } from "@entities/my-learning/api/my-learning-profile.dto";
import type { MyLearningProfile } from "@entities/my-learning/model/my-learning-profile.types";

export const fetchMyLearningProfile = async (
  usersId: number | string,
): Promise<MyLearningProfile> => {
  const response = await fetchApi<MyLearningProfileDto>(
    API_ENDPOINT.myLearning.detail(usersId),
  );

  return convertMyLearningProfile(response);
};
