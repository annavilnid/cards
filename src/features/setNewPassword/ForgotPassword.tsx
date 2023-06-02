import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { selectCount } from "@/features/counter/counterSlice";
import { RootState } from "@/app/store";

export function ForgotPassword() {
  const dispatch = useAppDispatch();

  const forgotPasswordHandler = () => {
    const payload = {
      email: "anna.vilnid@gmail.com", // кому восстанавливать пароль
      // from: "test-front-admin <ai73a@yandex.by>",
      // можно указать разработчика фронта)
      message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href="http://localhost:3000/#/set-new-password/$token$">
link</a>
</div>`, // хтмп-письмо, вместо $token$ бэк вставит токен
    };
    // const payload = {
    //   email: "test_mail@mail.ru",
    //   // from: "test-front-admin <ai73a@yandex.by>",
    //   // // можно указать разработчика фронта)
    //   // message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href="http://localhost:3000/#/set-new-password/$token$">link</a></div>`,
    // };
    dispatch(authThunks.forgotPassword(payload));
  };

  return (
    <div>
      <h1>ForgotPassword</h1>
      <button onClick={forgotPasswordHandler}>ForgotPassword</button>
    </div>
  );
}
