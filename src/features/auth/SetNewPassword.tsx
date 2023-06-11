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

const schema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .test("password-length", "Password must be at least 8 characters", (value) => {
      return !!value && value.length >= 8;
    }),
});

type FormData = yup.InferType<typeof schema>;

export const SetNewPassword = () => {
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
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

        <StyledButton type="submit" className="button">
          {buttonText.setNewPassword}
        </StyledButton>
      </StyledForm>
    </div>
  );
};
