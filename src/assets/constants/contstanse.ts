type buttonTextType = {
  signIn: string;
  signUp: string;
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
};

type infoMessageType = {
  forgotPassword: string;
  checkEmail: string;
  setNewPassword: string;
};

//TODO
// Изменить в infoMessage.checkEmail example@mail.com на реальный адрес почты
export const infoMessage: infoMessageType = {
  forgotPassword: "Enter your email address and we will send you further instructions",
  checkEmail: "We’ve sent an Email with instructions to example@mail.com",
  setNewPassword: "Create new password and we will send you further instructions to email",
};

export const buttonText: buttonTextType = {
  signIn: "Sign In",
  signUp: "Sign Up",
  forgotPassword: "Send Instructions",
  checkEmail: "Back to login",
  setNewPassword: "Create new password",
};
