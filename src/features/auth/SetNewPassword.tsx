import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  StyledForm,
  StyledWrapper,
  StyledEyeIcon,
  StyledButton,
} from "@/common/styles/commonStyles";
import { buttonText, labelText, title } from "@/assets/constants/contstanse";
import { FormInput } from "@/features/input/FormInput";
import { Title } from "@/features/title/Title";

const schema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .test(
      "password-length",
      "Password must be at least 8 characters",
      (value) => {
        return !!value && value.length >= 8;
      }
    ),
});

type FormData = yup.InferType<typeof schema>;

export const SetNewPassword = () => {
  const dispatch = useAppDispatch();
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [confirmPasswordShown, setConfirmPasswordShown] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  //TODO
  // const watchPassword = watch("password", "");
  // const watchConfirmPassword = watch("confirmPassword", "");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // const payload = {
    //   email: data.email,
    //   password: data.password,
    // };
    //
    // dispatch(authThunks.register(payload));
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const eyeIconPassword = passwordShown ? faEyeSlash : faEye;

  return (
    <>
      <Title>{title.setNewPassword}</Title>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledWrapper>
          <FormInput
            label={labelText.password}
            name="password"
            type={passwordShown ? "text" : "password"}
            register={register}
            errors={errors}
          />
          <StyledEyeIcon
            icon={eyeIconPassword}
            onClick={togglePasswordVisibility}
          />
        </StyledWrapper>

        <StyledButton type="submit" className="button" margin="70px 0 0 0">
          {buttonText.setNewPassword}
        </StyledButton>
      </StyledForm>
    </>
  );
};
