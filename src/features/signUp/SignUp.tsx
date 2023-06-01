import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";

export const SignUp = () => {
  const dispatch = useAppDispatch();

  const registerHandler = () => {
    const payload = {
      email: "test_mail@mail.ru",
      password: "12345678",
    };
    dispatch(authThunks.register(payload));
  };

  return (
    <div>
      <h1>SignUp</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
