import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { RootState } from "@/app/store";

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    const payload = {
      email: "anna.vilnid@gmail.com",
      password: "12345678",
      rememberMe: true,
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
