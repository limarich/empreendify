import api from "../../api";

export interface BusinessModel {
  id: string;
  mainPartnerships: string[];
  mainActivities: string[];
  mainResources: string[];
  valueProposition: string[];
  customerRelationship: string[];
  channels: string[];
  customerSegments: string[];
  costs: string[];
  revenue: string[];
  businessId: string;
}
export interface UpdateBusinessModelInput {
  businessId: string;
  mainPartnerships: string[];
  mainActivities: string[];
  mainResources: string[];
  valueProposition: string[];
  customerRelationship: string[];
  channels: string[];
  customerSegments: string[];
  costs: string[];
  revenue: string[];
}

export const getBusinessModel = async (id: string) => {
  const { data } = await api.get<{ businessModel: BusinessModel }>(
    `/business/business-model?id=${id}`
  );
  return data;
};

export const updateBusinessModel = async (props: UpdateBusinessModelInput) => {
  const { data } = await api.put<BusinessModel[]>("/business-model", {
    ...props,
  });
  return data;
};
