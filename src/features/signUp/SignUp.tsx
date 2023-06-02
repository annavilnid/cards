import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const SignUp = () => {
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

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input defaultValue="password" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <input defaultValue="confirmPassword" type="password" {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};
