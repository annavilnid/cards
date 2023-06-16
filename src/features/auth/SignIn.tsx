import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import React, { useState } from "react";
import {
  SubmitHandler,
  useForm,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import {
  StyledForm,
  StyledWrapper,
  StyledButton,
  StyledEyeIcon,
  StyledContainer,
} from "@/common/styles/commonStyles";
import { buttonText, labelText, linkText } from "@/assets/constants/contstanse";
import { CustomLink } from "@/features/link/CustomLink";
import { FormInput } from "@/features/input/FormInput";
// import * as Checkbox from "@radix-ui/react-checkbox";
// import { CheckIcon } from "@radix-ui/react-icons";

const schema = yup.object({
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
  rememberMe: yup.boolean(),
});

type FormData = yup.InferType<typeof schema>;

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

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
      password: data.password,
      rememberMe: !!data.rememberMe,
    };
    dispatch(authThunks.login(payload));
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const eyeIconPassword = passwordShown ? faEyeSlash : faEye;

  const methods = useFormContext();

  return (
    <FormProvider {...methods}>
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

        <StyledContainer>
          <input type="checkbox" {...register("rememberMe")} />
          <label htmlFor="rememberMe">{labelText.rememberMe}</label>
        </StyledContainer>

        <CustomLink
          to="/forgot-password"
          margin={"30px 0 0 0"}
          alignSelf={"end"}
          fontWeight={"500"}
          color={"var(--black-color)"}
          fontSize={"14px"}
          lineHeight={"1.2"}
        >
          {linkText.forgotPassword}
        </CustomLink>

        <StyledButton type="submit" className="button" margin="70px 0 0 0">
          {buttonText.signIn}
        </StyledButton>
      </StyledForm>
    </FormProvider>
  );
};
