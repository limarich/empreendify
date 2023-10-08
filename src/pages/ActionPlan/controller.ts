import * as yup from "yup";
import {
  UpdateActionPlanProps,
  getActionPlan,
  updateActionPlan,
} from "./model";
import message from "../../utils/message";

export const getActionPlanController = async (id: string) => {
  try {
    const schema = yup.string().required();
    await schema.validate(id);
    const res = await getActionPlan(id);
    return res;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};

const actionPlanItemSchema = yup.object().shape({
  what: yup.string(),
  why: yup.string(),
  who: yup.string(),
  when: yup.string(),
  where: yup.string(),
  how: yup.string(),
  howMuch: yup.string(),
  actionPlanId: yup.string(),
});

export const updateActionPlanController = async (
  props: UpdateActionPlanProps
) => {
  try {
    const schema = yup.object({
      businessId: yup.string().required(),
      items: yup.array().of(actionPlanItemSchema).required(),
    });
    await schema.validate(props);
    await updateActionPlan(props);
    message("plano de ação salvo com sucesso!", "success");
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};
