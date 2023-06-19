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
import {
  buttonText,
  infoMessage,
  labelText,
  linkText,
  title,
} from "@/assets/constants/contstanse";
import { FormInput } from "@/shared/ui/input/FormInput";
import { Title } from "@/shared/ui/title/Title";
import { Message } from "@/shared/ui/message/Message";
import { CustomLink } from "@/shared/ui/link/CustomLink";

// TODO
// плохо работает валидация email, например anna@g пропускает

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address in the email field")
      .required("Email is required"),
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const SignUp = () => {
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
    const payload = {
      email: data.email,
      password: data.password,
    };

    dispatch(authThunks.register(payload));
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const eyeIconPassword = passwordShown ? faEyeSlash : faEye;
  const eyeIconConfirmPassword = confirmPasswordShown ? faEyeSlash : faEye;

  return (
    <>
      <Title>{title.signUp}</Title>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label={labelText.email}
          type="text"
          name="email"
          register={register}
          errors={errors}
        />

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

        <StyledWrapper>
          <FormInput
            label={labelText.confirmPassword}
            name="confirmPassword"
            type={confirmPasswordShown ? "text" : "password"}
            register={register}
            errors={errors}
          />
          <StyledEyeIcon
            icon={eyeIconConfirmPassword}
            onClick={toggleConfirmPasswordVisibility}
          />
        </StyledWrapper>

        <StyledButton type="submit" className="button" margin="38px 0 0 0">
          {buttonText.signUp}
        </StyledButton>
      </StyledForm>

      <Message value={infoMessage.signUp} margin={"30px 0 15px"} />
      <CustomLink
        to="/sign-in"
        margin={"0 0 48px"}
        textDecorationLine={"underline"}
      >
        {linkText.signIn}
      </CustomLink>
    </>
  );
};
