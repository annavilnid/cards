import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { RootState } from "@/app/store";
import { useState } from "react";
import { SubmitHandler, useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledForm, StyledError, StyledLabel, StyledButton, StyledInput } from "./SignInStyles";

const schema = yup.object({
  email: yup.string().email("Please enter a valid email address in the email field").required("Email is required"),
});

type FormData = yup.InferType<typeof schema>;

export const ForgotPassword = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    const payload = {
      email: data.email,
      message: `<div style="background-color: lime; padding: 15px">password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`,
    };
    dispatch(authThunks.forgotPassword(payload));
  };

  const methods = useFormContext();

  return (
    <FormProvider {...methods}>
      <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="email">Email </StyledLabel>
          <StyledInput type="text" {...register("email")} />
          <StyledError>{errors.email?.message}</StyledError>

          <StyledButton type="submit" className="button">
            Sign In
          </StyledButton>
        </StyledForm>
      </div>
    </FormProvider>
  );
};
