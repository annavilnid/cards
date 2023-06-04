import { SignUp } from "@/features/auth/SignUp";
import { SignIn } from "@/features/auth/SignIn";
import { useLocation } from "react-router-dom";
import { Title } from "@/features/title/Title";
import { CustomLink } from "@/features/link/CustomLink";
import { FormWrapper, StyledText } from "./FormStyle";
export const Form = () => {
  const location = useLocation();

  return (
    <FormWrapper>
      {location.pathname === "/sign-up" ? (
        <>
          <Title>Sign Up</Title>
          <SignUp />
          <StyledText>Already have an account?</StyledText>
          <CustomLink to="/sign-in">Sign In</CustomLink>
        </>
      ) : location.pathname === "/sign-in" ? (
        <>
          <Title>Sign In</Title>
          <SignIn />
          <StyledText>Don't have an account?</StyledText>
          <CustomLink to="/sign-up">Sign Up</CustomLink>
        </>
      ) : null}
    </FormWrapper>
  );
};
