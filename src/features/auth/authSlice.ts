import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgForgotPasswordType, ArgLoginType, ArgRegisterType, AuthApi, LoginResponseType } from "./authApi";
import { createAppAsyncThunk } from "@/common/utils/create-app-async-thunk";
import { isAxiosError } from "axios";

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
  FORGOT_PASSWORD: "auth/forgot",
  PROFILE: "auth/me",
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

// const register = createAppAsyncThunk(THUNK_PREFIXES.REGISTER, (arg: ArgRegisterType, thunkAPI) => {
//   AuthApi.register(arg)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((res) => {
//       console.error(res);
//     });
// });

const register = createAppAsyncThunk<void, ArgRegisterType>("auth/register", async (arg: ArgRegisterType, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await AuthApi.register(arg);
    console.log("register", res);
  } catch (e) {
    return rejectWithValue("Register Error");
  }
});

// const register = createAppAsyncThunk<any, ArgRegisterType>(
//   THUNK_PREFIXES.REGISTER,
//   async (arg: ArgRegisterType, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await AuthApi.register(arg);
//       console.log("register", res);
//     } catch (e) {
//       if (!isAxiosError(e)) return "an error has occurred";
//       console.error(e?.response?.data.error);
//       return rejectWithValue("Register Error");
//     }
//   }
// );

const forgotPassword = createAppAsyncThunk(THUNK_PREFIXES.FORGOT_PASSWORD, (arg: ArgForgotPasswordType, thunkAPI) => {
  AuthApi.forgotPassword(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});

const getProfile = createAppAsyncThunk(THUNK_PREFIXES.PROFILE, (arg: any, thunkAPI) => {
  AuthApi.getProfile(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});

const changeUsersData = createAppAsyncThunk(THUNK_PREFIXES.PROFILE, (arg: any, thunkAPI) => {
  AuthApi.changeUsersData(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});
// //TODO
// const login = createAsyncThunk("auth/login", async (arg: ArgLoginType, thunkAPI) => {
//   const { dispatch } = thunkAPI;
//   return AuthApi.login(arg).then((res) => {
//     return { profile: res.data };
//     // dispatch(authActions.setProfile({ profile: res.data }));
//   });
// });

const login = createAppAsyncThunk<
  // 1. То, что возвращает Thunk
  { profile: LoginResponseType },
  // 2. ThunkArg - аргументы санки (тип, который санка принимает)
  ArgLoginType
  // 3. AsyncThunkConfig. Какие есть поля смотрим в доке / исходном коде.
  // state - используем для типизации App. Когда используем getState
  // dispatch - типизация диспатча
  // rejectValue - используем для типизации возвращаемой ошибки
>(THUNK_PREFIXES.LOGIN, async (arg: ArgLoginType) => {
  const res = await AuthApi.login(arg);
  return { profile: res.data };
});

// const login = createAsyncThunk(THUNK_PREFIXES.LOGIN, (arg: ArgLoginType, thunkAPI) => {
//   const { dispatch } = thunkAPI;
//   AuthApi.login(arg)
//     .then((res) => {
//       console.log(res);
//       debugger;
//       dispatch(authActions.setProfile({ profile: res.data }));
//     })
//     .catch((res) => {
//       console.error(res);
//     });
// });

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as LoginResponseType | null,
  },
  reducers: {
    // setProfile: (state, action: PayloadAction<{ profile: LoginResponseType }>) => {
    //   console.log(state, "state");
    //   state.profile = action.payload.profile;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login, forgotPassword, getProfile, changeUsersData };
