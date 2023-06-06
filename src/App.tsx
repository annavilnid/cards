import { Counter } from "./features/counter/Counter";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { appActions } from "@/app/AppSlice";
import { HashRouter, Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { ForgotPassword } from "@/features/setNewPassword/ForgotPassword";
import { Profile } from "@/features/profile/Profile";
import { Form } from "@/features/form/Form";
import PopoverDemo from "@/features/del/ProverDemo";
import CheckboxDemo from "@/features/del/ProverDemo";
import { GlobalStyles } from "@/common/styles/GlobalStyles";
import { Header } from "@/features/header/Header";
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
  // const isLoading = useAppSelector((state) => state.app.isLoading)
  // const error = useAppSelector((state) => state.app.error)
  // const dispatch = useAppDispatch()
  //
  // function handleErrorButtonClicked() {
  //   dispatch(appActions.setError({ error: "new error" }))
  // }
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(appActions.setIsLoading({ isLoading: false }))
  //   }, 3000)
  // }, [dispatch])
  //
  // if (isLoading) return <div>loading...</div>
  return (
    <div>
      <button
      // onClick={() => {
      //   dispatch(
      //     authThunks.login({
      //       email: "andres99.dev@gmail.com",
      //       password: "123123123",
      //       rememberMe: true,
      //     }),
      //   )
      // }}
      >
        login
      </button>
      {/*<button onClick={handleErrorButtonClicked}>create error</button>*/}
      {/*{!!error && <h2>{error}</h2>}*/}
      <Counter />
    </div>
  );
};

//TODO
// const router = createBrowserRouter([
//   {
//     element: <Test />,
//     path: "/",
//   },
//   {
//     element: <SignUp_t />,
//     path: "/sign-up",
//   },
//   {
//     element: <SignIn />,
//     path: "/sign-in",
//   },
//   {
//     element: <ForgotPassword />,
//     path: "/forgot-password",
//   },
//   {
//     element: <Profile />,
//     path: "/profile",
//   },
// ]);

const theme = createTheme();

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/sign-up" element={<Form />} />
            <Route path="/sign-in" element={<Form />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
}
