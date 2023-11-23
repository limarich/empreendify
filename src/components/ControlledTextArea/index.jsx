/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";
import { Input } from "../Input";
import styles from "./controlled-input.module.css";
import { TextArea } from "../TextArea";

export const ControlledTextArea = ({
  name,
  label,
  control,
  error,
  ...rest
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <TextArea
            {...rest}
            name={label}
            onChange={onChange}
            value={value}
            hasError={error ? true : false}
          />
        )}
      />
      {error && <span className={styles.error}>{error?.message}</span>}
    </>
  );
};
