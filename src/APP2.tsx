import { Counter } from "./features/counter/Counter";
import { createBrowserRouter, RouterProvider, Outlet, useRouteError, useNavigate } from "react-router-dom";
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
import { ForgotPassword } from "@/features/auth/ForgotPassword";
import { Message } from "@/features/Message/Message";
import { buttonText, infoMessage, title, linkText } from "@/assets/constants/contstanse";
import logo from "@/assets/check-email.svg";
import { SetNewPassword } from "@/features/auth/SetNewPassword";
import { Profile } from "@/features/profile/Profile";

export const Test = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const userProfile = useAppSelector((state) => state.auth.profile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        appActions.setIsLoading({
          isLoading: false,
        })
      );
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    console.log(userProfile);
    if (userProfile) {
      navigate("/profile");
    }
  }, [userProfile, navigate]);

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
                  <Title>{title.signIn}</Title>
                  <SignIn />
                  <Message value={infoMessage.signIn} margin={"30px 0 15px"} />
                  <CustomLink to="/sign-up" margin={"0 0 48px"} textDecorationLine={"underline"}>
                    {linkText.signUp}
                  </CustomLink>
                </>
              ),
            },
            {
              path: "sign-up",
              element: (
                <>
                  <Title>{title.signUp}</Title>
                  <SignUp />
                  <Message value={infoMessage.signUp} margin={"30px 0 15px"} />
                  <CustomLink to="/sign-in" margin={"0 0 48px"} textDecorationLine={"underline"}>
                    {linkText.signIn}
                  </CustomLink>
                </>
              ),
            },
            {
              path: "forgot-password",
              element: (
                <>
                  <Title>{title.forgotPassword}</Title>
                  <ForgotPassword />
                  <Message value={infoMessage.forgotPasswordTwo} margin={"30px 0 15px"} />
                  <CustomLink to="/sign-in" margin={"0 0 48px"} textDecorationLine={"underline"}>
                    {linkText.tryLoggingIn}
                  </CustomLink>
                </>
              ),
            },
            {
              path: "check-email",
              element: (
                <>
                  <Title>{title.checkEmail}</Title>
                  <img src={logo} alt="Logo check email" />
                  <Message value={infoMessage.checkEmail} margin={"30px 0 15px"} />
                  <CustomLink to="/sign-in">{buttonText.checkEmail}</CustomLink>
                </>
              ),
            },
            {
              // path: "set-new-password/:token",
              path: "set-new-password",
              element: (
                <>
                  <Title>{title.setNewPassword}</Title>
                  <SetNewPassword />
                </>
              ),
            },
            {
              path: "profile",
              element: <Profile />,
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
