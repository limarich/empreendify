import api from "../../api";
import { UserDataProps } from "../../utils/getUserData";

export interface AuthenticateInput {
  email: string;
  password: string;
}

export const authenticate = async (props: AuthenticateInput) => {
  const { data } = await api.post<UserDataProps>("/sections", {
    ...props,
  });
  return data;
};
