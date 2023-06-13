type ButtonTextType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
};

type InfoMessageType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
};

type TitleType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
};

type LinkType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  tryLoggingIn: string;
};

type LabelType = {
  email: string;
  password: string;
  rememberMe: string;
};

//TODO
// Изменить в infoMessage.checkEmail example@mail.com на реальный адрес почты
export const infoMessage: InfoMessageType = {
  signIn: "Don't have an account?",
  signUp: "Already have an account?",
  forgotPassword: "Enter your email address and we will send you further instructions",
  checkEmail: "We’ve sent an Email with instructions to example@mail.com",
  setNewPassword: "Create new password and we will send you further instructions to email",
};

export const buttonText: ButtonTextType = {
  signIn: "Sign In",
  signUp: "Sign Up",
  forgotPassword: "Send Instructions",
  checkEmail: "Back to login",
  setNewPassword: "Create new password",
};

export const title: TitleType = {
  signIn: "Sign In",
  signUp: "Sign Up",
  forgotPassword: "Forgot your password?",
  checkEmail: "Check Email",
  setNewPassword: "Create new password",
};

export const linkText: LinkType = {
  signIn: "Sign In",
  forgotPassword: "Forgot Password?",
  signUp: "Sign Up",
  tryLoggingIn: "Try logging in",
};

export const labelText: LabelType = {
  email: "Email",
  password: "Password",
  rememberMe: "Remember me",
};
