import { Counter } from "./features/counter/Counter";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useRouteError,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import React, { useEffect } from "react";
import { appActions } from "@/app/AppSlice";
import { Header } from "@/features/header/Header";
import { Form } from "@/shared/ui/form/Form";
import { SignUp } from "@/features/auth/SignUp";
import { SignIn } from "@/features/auth/SignIn";
import { ForgotPassword } from "@/features/auth/ForgotPassword";
import { SetNewPassword } from "@/features/auth/SetNewPassword";
import { Profile } from "@/features/profile/Profile";
import { CheckEmail } from "@/features/auth/CheckEmail";
import { ErrorPage } from "@/shared/ui/errorpage/ErrorPage";

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
              element: <SignIn />,
            },
            {
              path: "sign-up",
              element: <SignUp />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "check-email",
              element: <CheckEmail />,
            },
            {
              // path: "set-new-password/:token",
              path: "set-new-password",
              element: <SetNewPassword />,
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
