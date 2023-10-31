import api from "../../api";

export interface UserUpdateInput {
  name: string;
  email: string;
  password: string;
  phone: string;
}
export const updateUser = async (props: UserUpdateInput) => {
  const { data } = await api.put("/user/update", props);
  return data;
};
