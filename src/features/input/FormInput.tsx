import React, { ReactNode } from "react";
import {
  Path,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import {
  StyledError,
  StyledInput,
  StyledLabel,
} from "@/features/input/FormInputStyles";

type FormInputProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  type: "text" | "password";
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const FormInput = <T extends FieldValues>({
  label,
  name,
  register,
  errors,
  inputProps,
  type,
}: FormInputProps<T>) => {
  return (
    <>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput type={type} {...register(name)} {...inputProps} />
      {errors && (
        <StyledError>{errors[name]?.message as ReactNode}</StyledError>
      )}
    </>
  );
};
