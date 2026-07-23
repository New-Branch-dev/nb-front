import { fetchApi } from "@shared/api";
import { API_ENDPOINT } from "@shared/config";

import type { CurrentUser } from "@entities/user/model/current-user.types";

export const fetchCurrentUser = async (): Promise<CurrentUser> => {
  return fetchApi<CurrentUser>(API_ENDPOINT.users.me);
};
