import api from "../../api";

export interface UserRequestInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  businessName: string;
  businessPhone: string;
  businessWebsite?: string;
  businessDescription?: string;
}

export const createUserRequest = async (props: UserRequestInput) => {
  const { data } = await api.post("/user-request", {
    ...props,
  });
  return data;
};
