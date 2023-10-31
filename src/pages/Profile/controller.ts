import { getUserData } from "../../utils/getUserData";
import message from "../../utils/message";
import { UserUpdateInput, updateUser } from "./model";
import * as yup from "yup";

export const updateUserController = async (
  props: UserUpdateInput & { confirmPassword: string }
) => {
  try {
    const schema = yup.object({
      name: yup.string(),
      email: yup.string(),
      password: yup.string().required("A senha é obrigatória."),
      confirmPassword: yup.string().test({
        name: "passwords-match",
        message: "As senhas não coincidem.",
        test: function (value) {
          return this.parent.password === value;
        },
      }),
      phone: yup.string(),
    });
    await schema.validate(props);
    const res = await updateUser({
      email: props.email,
      name: props.name,
      password: props.password,
      phone: props.phone,
    });
    message("dados atualizados com sucesso", "success");
    const user = getUserData();
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...user,
        phone: props.phone,
        name: props.name,
      })
    );
    return res;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      message(error, "info");
    } else {
      message(error, "error");
    }
  }
};
