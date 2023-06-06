import { Counter } from "./features/counter/Counter";
import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom";
import "./App.css";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { appActions } from "@/app/AppSlice";
import { Header } from "@/features/header/Header";
import { Form } from "@/features/form/Form";

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
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      <Counter />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/test",
    //     element: <Test />,
    //     // loader: authLoader,
    //   },
    //   {
    //     path: "/sign-up",
    //     element: <Form />,
    //     // loader: authLoader,
    //   },
    //   {
    //     path: "/sign-in",
    //     element: <Form />,
    //     // loader: authLoader,
    //   },
    //   {
    //     element: <div>hello</div>,
    //     path: "/hello",
    //   },
    // ],
  },
];

const theme = createTheme();

const router = createBrowserRouter(routes, {
  basename: "/cards",
});

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

function NotFound() {
  return <h1>404</h1>;
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
