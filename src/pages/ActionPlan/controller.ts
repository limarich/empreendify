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
  what: yup.string().required('O campo "what" é obrigatório'),
  why: yup.string().required('O campo "why" é obrigatório'),
  who: yup.string().required('O campo "who" é obrigatório'),
  when: yup.string().required('O campo "when" é obrigatório'),
  where: yup.string().required('O campo "where" é obrigatório'),
  how: yup.string().required('O campo "how" é obrigatório'),
  howMuch: yup.string().required('O campo "howMuch" é obrigatório'),
  actionPlanId: yup.string().required('O campo "actionPlanId" é obrigatório'),
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
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};
