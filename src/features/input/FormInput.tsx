import React from "react";
import { FieldErrors, FieldValues, UseFormRegister, Path } from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  label?: string;
  name: keyof T & string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const FormInput = <T extends FieldValues>({ label, name, register, errors, inputProps }: FormInputProps<T>) => {
  const labelFor = `${name}-input`;
  const inputName = `${name}`;

  return (
    <div>
      {label && <label htmlFor={labelFor}>{label}</label>}
      <input type="text" name={name.toString()} id={labelFor} {...register(name as Path<T>)} {...inputProps} />
      {errors && <span>{errors[name]?.message}</span>}
    </div>
  );
};
