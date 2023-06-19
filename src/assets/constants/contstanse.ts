type ButtonTextType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
  userProfileSave: string;
  userProfileLogout: string;
  404: string;
};

type InfoMessageType = {
  signIn: string;
  signUp: string;
  forgotPasswordOne: string;
  forgotPasswordTwo: string;
  checkEmail: string;
  setNewPassword: string;
  404: string;
};

type TitleType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
  profile: string;
  404: string;
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
  confirmPassword: string;
  userProfile: string;
};

//TODO
// Изменить в infoMessage.checkEmail example@mail.com на реальный адрес почты
export const infoMessage: InfoMessageType = {
  signIn: "Don't have an account?",
  signUp: "Already have an account?",
  forgotPasswordOne:
    "Enter your email address and we will send you further instructions",
  forgotPasswordTwo: "Did you remember your password?",
  checkEmail: "We’ve sent an Email with instructions to example@mail.com",
  setNewPassword:
    "Create new password and we will send you further instructions to email",
  404: "Sorry! Page not found!",
};

export const buttonText: ButtonTextType = {
  signIn: "Sign In",
  signUp: "Sign Up",
  forgotPassword: "Send Instructions",
  checkEmail: "Back to login",
  setNewPassword: "Create new password",
  userProfileSave: "save",
  userProfileLogout: "Log out",
  404: "Back to home page",
};

export const title: TitleType = {
  signIn: "Sign In",
  signUp: "Sign Up",
  forgotPassword: "Forgot your password?",
  checkEmail: "Check Email",
  setNewPassword: "Create new password",
  profile: "Personal Information",
  404: "Ooops!",
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
  confirmPassword: "Confirm Password",
  rememberMe: "Remember me",
  userProfile: "Nickname",
};
