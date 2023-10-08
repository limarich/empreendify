import * as yup from "yup";
import message from "../../utils/message";
import {
  UpdateBusinessModelInput,
  getBusinessModel,
  updateBusinessModel,
} from "./model";

export const getBusinessModelController = async (id: string) => {
  try {
    const schema = yup.string().required();
    await schema.validate(id);
    const res = await getBusinessModel(id);
    return res;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};

export const updateBusinessModelController = async (
  props: UpdateBusinessModelInput
) => {
  try {
    const schema = yup.object({
      businessId: yup.string().required(),
      mainPartnerships: yup.array().of(yup.string()).required(),
      mainActivities: yup.array().of(yup.string()).required(),
      mainResources: yup.array().of(yup.string()).required(),
      valueProposition: yup.array().of(yup.string()).required(),
      customerRelationship: yup.array().of(yup.string()).required(),
      channels: yup.array().of(yup.string()).required(),
      customerSegments: yup.array().of(yup.string()).required(),
      costs: yup.array().of(yup.string()).required(),
      revenue: yup.array().of(yup.string()).required(),
    });
    await schema.validate(props);
    const res = await updateBusinessModel(props);
    message("modelo de negócio atualizado com sucesso!", "success");
    return res;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};
