import React from "react";
import { useForm } from "react-hook-form";
import { ControlledInput } from "../ControlledInput";
import { ControlledTextArea } from "../ControlledTextArea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./user-request-modal.module.css";
import { createUserRequestController } from "./controller";
import message from "../../utils/message";

const schema = yup.object({
  name: yup.string().required("O campo nome de usuário é obrigatório"),
  email: yup.string().required("O campo email é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
  phone: yup.string().required("O campo telefone é obrigatório"),
  businessName: yup.string().required("O campo nome de negócio é obrigatório"),
  businessPhone: yup
    .string()
    .required("O campo email de negócio é obrigatório"),
  businessWebsite: yup.string(),
  businessDescription: yup.string(),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
});

export const UserRequestModal = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      businessDescription: "",
      businessName: "",
      businessPhone: "",
      businessWebsite: "",
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { confirmPassword, ...rest } = data;
    const res = await createUserRequestController({
      ...rest,
    });

    if (res) {
      onClose();
      reset();
      message("solcitação enviada com sucesso", "success");
    } else {
      message("erro ao enviar a solicitação", "error");
    }
  };

  return (
    <div className={`${styles.fade} ${isOpen ? styles.open : ""}`}>
      <div id="popup" className={styles.popup}>
        <h4 className={styles.popupTitle}>
          Preencha os campos{" "}
          <button
            className={styles.closeBtn}
            onClick={() => {
              onClose();
              reset();
            }}
          >
            X
          </button>
        </h4>

        <div className="form-body">
          <h3>Dados do usuário</h3>
          <hr />
          <ControlledInput
            control={control}
            name="name"
            label="Nome"
            error={errors?.name}
          />
          <ControlledInput
            control={control}
            name="email"
            label="Email"
            error={errors?.email}
          />
          <ControlledInput
            control={control}
            name="phone"
            label="telefone"
            error={errors?.phone}
          />
          <ControlledInput
            control={control}
            name="password"
            label="Senha de acesso"
            error={errors?.password}
          />
          <ControlledInput
            control={control}
            name="confirmPassword"
            label="Confirme a senha"
            error={errors?.confirmPassword}
          />
        </div>
        <div>
          <h3>Dados do negócio</h3>
          <hr />
          <ControlledInput
            control={control}
            name="businessName"
            label="Nome"
            error={errors?.businessName}
          />
          <ControlledInput
            control={control}
            name="businessPhone"
            label="telefone"
            error={errors?.businessPhone}
          />
          <ControlledInput
            control={control}
            name="businessWebsite"
            label="site"
            error={errors?.businessWebsite}
          />
        </div>
        <h3>Descrição</h3>
        <hr />
        <ControlledTextArea
          control={control}
          name="businessDescription"
          label="Descrição"
          error={errors?.businessDescription}
          placeholder="Uma breve descrição de seu negócio"
        />

        <button className={styles.popupButton} onClick={handleSubmit(onSubmit)}>
          Enviar Solicitação
        </button>
      </div>
    </div>
  );
};
