import api from "../../api";

export interface UpdateActionPlanProps {
  businessId: string;
  items: ActionPlanItems[];
}
export interface ActionPlanItems {
  what: string;
  why: string;
  who: string;
  when: string;
  where: string;
  how: string;
  howMuch: string;
  actionPlanId: string;
}

export interface GetActionPlanResponse {
  actionPlan: ActionPlan;
}

export interface ActionPlan {
  id: string;
  businessId: string;
  items: any[];
}

export const getActionPlan = async (id: string) => {
  const { data } = await api.post<GetActionPlanResponse>(
    `/action-plan?id=${id}`
  );
  return data;
};

export const updateActionPlan = async (props: UpdateActionPlanProps) => {
  await api.put("/action-plan", {
    ...props,
  });
};
