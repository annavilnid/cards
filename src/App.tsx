import { Counter } from "./features/counter/Counter"
import "./App.css"
// import { useAppDispatch, useAppSelector } from "@/app/hooks"
// import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material"
import { store } from "@/app/store"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"

export const Test = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
  }, [])

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      <Counter />
    </div>
  )
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
  )
}

const router = createBrowserRouter([
  {
    element: <Test />,
    path: "/",
  },
  {
    element: <div>hello</div>,
    path: "/hello",
  },
])

const theme = createTheme()
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
