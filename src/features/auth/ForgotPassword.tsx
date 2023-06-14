import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledForm, StyledError, StyledButton, StyledInput } from "./ForgotPasswordStyles";
import { useSelector } from "react-redux";
import { appActions } from "@/app/AppSlice";
import { useNavigate } from "react-router-dom";
import { buttonText, infoMessage } from "@/assets/constants/contstanse";
import { Message } from "@/features/Message/Message";

const schema = yup.object({
  email: yup.string().email("Please enter a valid email address in the email field").required("Email is required"),
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

  const methods = useFormContext();

  return (
    <FormProvider {...methods}>
      <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {/*<StyledLabel htmlFor="email">Email </StyledLabel>*/}
          <StyledInput type="text" {...register("email")} placeholder="Email" />
          <StyledError>{errors.email?.message}</StyledError>

          <Message value={infoMessage.forgotPasswordOne} textAlign={"left"} />

          <StyledButton type="submit" className="button">
            {buttonText.forgotPassword}
          </StyledButton>
        </StyledForm>
      </div>
    </FormProvider>
  );
};
