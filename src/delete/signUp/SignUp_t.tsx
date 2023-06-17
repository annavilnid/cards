import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

export const SignUp_t = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: FormData) => {
    // if (data.password === data.confirmPassword) {
    //   dispatch(authThunks.register(data));
    // } else {
    //   // Обработка ошибки, если пароли не совпадают
    // }
    console.log(data);
    const payload = {
      email: data.email,
      password: data.password,
    };

    dispatch(authThunks.register(payload));
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type={passwordShown ? "text" : "password"} {...register("password")} />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
        <p>{errors.password?.message}</p>

        <input type={passwordShown ? "text" : "password"} {...register("confirmPassword")} />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
        <p>{errors.confirmPassword?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
