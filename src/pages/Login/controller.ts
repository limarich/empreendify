import * as yup from "yup";
import { AuthenticateInput, authenticate } from "./model";
import message from "../../utils/message";

export const authenticateController = async (props: AuthenticateInput) => {
  try {
    const schema = yup.object({
      email: yup.string().required(),
      password: yup.string().required(),
    });

    await schema.validate(props);
    const res = await authenticate(props);
    return res;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error.message, "warning");
    } else {
      message(error, "error");
    }
  }
};
