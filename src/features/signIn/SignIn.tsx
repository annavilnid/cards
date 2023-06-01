import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    const payload = {
      email: "test_mail@mail.ru",
      password: "12345678",
      rememberMe: false,
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};
