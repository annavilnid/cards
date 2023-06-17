import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";
import {
  SubmitHandler,
  useForm,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledForm, StyledButton } from "@/common/styles/commonStyles";
import { useSelector } from "react-redux";
import { appActions } from "@/app/AppSlice";
import { useNavigate } from "react-router-dom";
import {
  buttonText,
  infoMessage,
  linkText,
  title,
} from "@/assets/constants/contstanse";
import { Message } from "@/features/Message/Message";
import { FormInput } from "@/features/input/FormInput";
import { Title } from "@/features/title/Title";
import { CustomLink } from "@/features/link/CustomLink";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address in the email field")
    .required("Email is required"),
});

type FormData = yup.InferType<typeof schema>;
export const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    const payload = {
      email: data.email,
      message: `<div style="background-color: lime; padding: 15px">
      password recovery link: <a href="https://annavilnid.github.io/cards/set-new-password/$token$">link</a>
      </div>`,
    };
    try {
      await dispatch(authThunks.forgotPassword(payload));
      navigate("/check-email"); // Замените '/success' на нужный путь
    } catch (error) {
      // TODO Уточнить про этот способ, возможно он не оптимальный
      // Обработка ошибок, если необходимо
    }
  };

  // const methods = useFormContext();

  return (
    // <FormProvider {...methods}>
    <>
      <Title>{title.forgotPassword}</Title>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          type="text"
          register={register}
          errors={errors}
          inputProps={{ placeholder: "Email" }}
        />

        <Message value={infoMessage.forgotPasswordOne} textAlign={"left"} />

        <StyledButton type="submit" className="button" margin="70px 0 0 0">
          {buttonText.forgotPassword}
        </StyledButton>
      </StyledForm>

      <Message value={infoMessage.forgotPasswordTwo} margin={"30px 0 15px"} />
      <CustomLink
        to="/sign-in"
        margin={"0 0 48px"}
        textDecorationLine={"underline"}
      >
        {linkText.tryLoggingIn}
      </CustomLink>
    </>
    // </FormProvider>
  );
};
