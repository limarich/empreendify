import message from "../../utils/message";
import { UserRequestInput, createUserRequest } from "./model";
import * as yup from "yup";

export const createUserRequestController = async (props: UserRequestInput) => {
  try {
    const schema = yup.object({
      name: yup.string().required("O campo nome de usuário é obrigatório"),
      email: yup.string().required("O campo  email é obrigatório"),
      password: yup.string().required("O campo senha é obrigatório"),
      phone: yup.string().required("O campo  telefone é obrigatório"),
      businessName: yup
        .string()
        .required("O campo nome de negócio é obrigatório"),
      businessPhone: yup
        .string()
        .required("O campo email de negócio é obrigatório"),
      businessWebsite: yup.string(),
      businessDescription: yup.string(),
    });
    await schema.validate(props);
    await createUserRequest(props);
    return true;
  } catch (error) {
    message(error, "error");
  }
};
