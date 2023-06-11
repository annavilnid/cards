import { Counter } from "./features/counter/Counter";
import { createBrowserRouter, createHashRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom";
import "./App.css";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import React, { useEffect } from "react";
import { appActions } from "@/app/AppSlice";
import { Header } from "@/features/header/Header";
import { Form } from "@/features/form/Form";
import { SignUp } from "@/features/auth/SignUp";
import { SignIn } from "@/features/auth/SignIn";
import { Title } from "@/features/title/Title";
import { CustomLink } from "@/features/link/CustomLink";
import { StyledText } from "./AppStyles";
import { ForgotPassword } from "@/features/auth/ForgotPassword";
import { Message } from "@/features/Message/Message";
import { buttonText, infoMessage } from "@/assets/constants/contstanse";
import logo from "@/assets/check-email.svg";
import { SetNewPassword } from "@/features/auth/SetNewPassword";

export const Test = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        appActions.setIsLoading({
          isLoading: false,
        })
      );
    }, 3000);
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      <Counter />
    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Test /> },
        {
          element: <Form />,
          children: [
            {
              path: "sign-in",
              element: (
                <>
                  <Title>Sign In</Title>
                  <SignIn />
                  <CustomLink to="/forgot-password">Forgot Password?</CustomLink>
                  <StyledText>Don't have an account?</StyledText>
                  <CustomLink to="/sign-up">Sign Up</CustomLink>
                </>
              ),
            },
            {
              path: "sign-up",
              element: (
                <>
                  <Title>Sign Up</Title>
                  <SignUp />
                  <StyledText>Already have an account?</StyledText>
                  <CustomLink to="/sign-in">Sign In</CustomLink>
                </>
              ),
            },
            {
              path: "forgot-password",
              element: (
                <>
                  <Title>Forgot Password</Title>
                  <ForgotPassword />
                  <Message value={infoMessage.forgotPassword} />
                </>
              ),
            },
            {
              path: "check-email",
              element: (
                <>
                  <Title>Check Email</Title>
                  <img src={logo} alt="Logo check email" />
                  <Message value={infoMessage.checkEmail} />
                  <CustomLink to="/sign-in">{buttonText.checkEmail}</CustomLink>
                </>
              ),
            },
            {
              path: "set-new-password",
              element: (
                <>
                  <Title>Create new password</Title>
                  <SetNewPassword />
                </>
              ),
            },
          ],
        },
      ],
    },
  ],
  { basename: "/cards" }
);

// const router = createBrowserRouter(routes, {
//   basename: "/cards",
// });

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       errorElement: <ErrorPage />,
//       children: [
//         { path: "/test", element: <Test /> },
//         { path: "/form", element: <Form /> },
//         { path: "/yo", element: <h1>yo</h1> },
//       ],
//     },
//   ],
//   { basename: "/cards" }
// );

const theme = createTheme();
export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
