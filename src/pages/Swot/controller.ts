import * as yup from "yup";
import message from "../../utils/message";
import { Swot, getSwot, updateSwot } from "./model";

export const getSwotController = async (id: string) => {
  try {
    const schema = yup.string().required();
    await schema.validate(id);
    const res = await getSwot(id);
    return res;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};
export const updateSwotController = async (props: Swot) => {
  try {
    const schema = yup.object({
      strengths: yup.array(yup.string()).required(),
      weaknesses: yup.array(yup.string()).required(),
      opportunities: yup.array(yup.string()).required(),
      threats: yup.array(yup.string()).required(),
      businessId: yup.string().required(),
    });
    await schema.validate(props);
    await updateSwot(props);
    message("dados salvos com sucesso!", "success");
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};
