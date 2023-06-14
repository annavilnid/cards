import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledWrapper,
  StyledInputWithPassword,
  StyledError,
  StyledEyeIcon,
  StyledButton,
} from "./SignUpStyles";
import { buttonText } from "@/assets/constants/contstanse";

const schema = yup
  .object({
    email: yup.string().email("Please enter a valid email address in the email field").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .test("password-length", "Password must be at least 8 characters", (value) => {
        return !!value && value.length >= 8;
      }),
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
  const [confirmPasswordShown, setConfirmPasswordShown] = useState<boolean>(false);

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
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="email">Email </StyledLabel>
        <StyledInput type="text" {...register("email")} />
        <StyledError>{errors.email?.message}</StyledError>

        <StyledLabel htmlFor="password">Password </StyledLabel>
        <StyledWrapper>
          <StyledInputWithPassword
            type={passwordShown ? "text" : "password"}
            {...register("password")}
            className={passwordShown ? "password-visible" : "password-hidden"}
          />
          <StyledEyeIcon icon={eyeIconPassword} onClick={togglePasswordVisibility} />
        </StyledWrapper>
        <StyledError>{errors.password?.message}</StyledError>

        <StyledLabel htmlFor="confirmPassword">Confirm Password </StyledLabel>
        <StyledWrapper>
          <StyledInputWithPassword
            type={confirmPasswordShown ? "text" : "password"}
            {...register("confirmPassword")}
            className={confirmPasswordShown ? "password-visible" : "password-hidden"}
          />
          <StyledEyeIcon icon={eyeIconConfirmPassword} onClick={toggleConfirmPasswordVisibility} />
        </StyledWrapper>
        <StyledError>{errors.confirmPassword?.message}</StyledError>
        {/*{watchPassword !== watchConfirmPassword && <StyledError>Passwords do not match</StyledError>}*/}

        <StyledButton type="submit" className="button">
          {buttonText.signUp}
        </StyledButton>
      </StyledForm>
    </div>
  );
};
