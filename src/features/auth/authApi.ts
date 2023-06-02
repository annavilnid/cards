import { AuthInstance } from "@/common/api/commonAPI";

// export const AuthApi = {
//   register(params: RegisterArgs) {
//     return AuthInstance.post<RegisterResponse>("register", params);
//   },
// };
export const AuthApi = {
  register: (params: ArgRegisterType) => {
    return AuthInstance.post<RegisterResponseType>("register", params);
  },
  login: (params: ArgLoginType) => {
    return AuthInstance.post<LoginResponseType>("login", params);
  },
  forgotPassword: (params: ArgForgotPasswordType) => {
    return AuthInstance.post<any>("forgot", params);
  },
  getProfile: (params: any) => {
    return AuthInstance.post<any>("me", params);
  },
  changeUsersData: (params: any) => {
    return AuthInstance.put<any>("me", params);
  },
};

export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">;

export type ArgLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type ArgForgotPasswordType = {
  email: string;
  from?: string;
  message?: string;
};

export type RegisterResponseType = {
  addedUser: Omit<LoginResponseType, "token" | "tokenDeathTime">;
};

export type LoginResponseType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
};
