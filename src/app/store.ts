import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";
import { appReducer } from "@/app/AppSlice";
import { authReducer } from "@/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
