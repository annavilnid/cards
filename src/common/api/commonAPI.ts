import axios from "axios";

// export const AuthInstance = axios.create({
//   baseURL: "https://neko-back.herokuapp.com/2.0/auth/",
//   withCredentials: true,
// });

export const AuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + "auth/",
  withCredentials: true,
});

// console.log(import.meta.env.VITE_BASE_API_URL);
//
// export const AuthInstance = axios.create({
//   baseURL: import.meta.env.VITE_BASE_API_URL + "auth/",
//   withCredentials: true,
// });
//
// export const authAPI = {
//   register(data: ArgRegisterType) {
//     return AuthInstance.post<RegisterResponseType, AxiosResponse<RegisterResponseType>, ArgRegisterType>(
//       "register",
//       data
//     );
//   },
//   login(data: any) {
//     return AuthInstance.post<LoginResponseType, AxiosResponse<LoginResponseType>, ArgLoginType>("login", data);
//   },
// };
