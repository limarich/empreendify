import api from "../../api";

export interface GetSwotResponse {
  swot: Swot;
}

export interface Swot {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  businessId: string;
}

export const getSwot = async (id: string) => {
  const { data } = await api.get<GetSwotResponse>(`/swot?id=${id}`);
  return data;
};

export const updateSwot = async (props: Swot) => {
  const { data } = await api.put<GetSwotResponse>("/swot", props);
  return data;
};
