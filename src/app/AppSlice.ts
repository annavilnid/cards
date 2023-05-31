import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  // name должен быть уникальным
  // name будет использоваться в качетве приставки (redux ducks)
  name:
    "app app app app app app app fd fd fd fd app app app app app app app app app app" +
    " app app app app app app app app app app app app app app app appapp app app app app app app app app app app app app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app appapp app app app app app app app app app app",
  // Инициализационный стейт
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  // reducers состоит из подредьюсеров, каждый из которых эквивалентен одному оператору case в switch, как мы делали раньше (обычный redux)
  reducers: {},
})

// Создаем reducer с помощью slice
export const appReducer = slice.reducer
export const appActions = slice.actions
