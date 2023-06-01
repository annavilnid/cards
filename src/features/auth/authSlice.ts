import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, AuthApi, LoginResponseType } from "./authApi";

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
};

// const register = createAsyncThunk(
//   // 1 - prefix
//   "auth/register",
//   // 2 - callback (условно наша старая санка), в которую:
//   // - первым параметром (arg) мы передаем аргументы необходимые для санки
//   // (если параметров больше чем один упаковываем их в объект)
//   // - вторым параметром thunkAPI, обратившись к которому получим dispatch и др. свойства
//   // https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object
//   (arg, thunkAPI) => {
//     authApi.register(arg).then((res) => {
//       debugger;
//     });
//   }
// );

const register = createAsyncThunk(THUNK_PREFIXES.REGISTER, (arg: ArgRegisterType, thunkAPI) => {
  AuthApi.register(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});

const login = createAsyncThunk(THUNK_PREFIXES.REGISTER, (arg: ArgLoginType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  AuthApi.login(arg)
    .then((res) => {
      dispatch(authActions.setProfile({ profile: res.data }));
    })
    .catch((res) => {
      console.error(res);
    });
});

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as LoginResponseType | null,
  },
  reducers: {
    setProfile: (state, action: PayloadAction<{ profile: LoginResponseType }>) => {
      state.profile = action.payload.profile;
    },
  },
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login };
