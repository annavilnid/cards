import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@/features/button/Button";

const commonStyles = `
  min-height: 26px;
  width: 347px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  ${commonStyles}
`;

const StyledWrapper = styled.div`
  ${commonStyles}
  position: relative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const StyledInputPassword = styled.input`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  min-height: 100%;
  width: 92%;

  &.password-visible {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
  }

  &.password-hidden {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: transparent;
    text-shadow: 0 0 0 #000000;
  }
`;

const StyledLabel = styled.label`
  padding: 4px 0 0 0;
  align-self: start;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
  opacity: 0.5;
`;

const StyledError = styled.p`
  min-height: 20px;
  padding: 0;
  margin: 0;
  align-self: start;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: red;
`;

const StyledEyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const schema = yup
  .object({
    email: yup.string().email("Неверный формат").required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const SignUp = () => {
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

  const watchPassword = watch("password", "");
  const watchConfirmPassword = watch("confirmPassword", "");

  const dispatch = useAppDispatch();

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
          <StyledInputPassword
            type={passwordShown ? "text" : "password"}
            {...register("password")}
            className={passwordShown ? "password-visible" : "password-hidden"}
          />
          <StyledEyeIcon icon={eyeIconPassword} onClick={togglePasswordVisibility} />
        </StyledWrapper>
        <StyledError>{errors.password?.message}</StyledError>

        <StyledLabel htmlFor="confirmPassword">Confirm Password </StyledLabel>
        <StyledWrapper>
          <StyledInputPassword
            type={confirmPasswordShown ? "text" : "password"}
            {...register("confirmPassword")}
            className={confirmPasswordShown ? "password-visible" : "password-hidden"}
          />
          <StyledEyeIcon icon={eyeIconConfirmPassword} onClick={toggleConfirmPasswordVisibility} />
        </StyledWrapper>
        {watchPassword !== watchConfirmPassword && <StyledError>Passwords do not match</StyledError>}

        <Button type="submit" minWidth="347px" />
      </StyledForm>
    </div>
  );
};
