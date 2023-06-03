import { SignUp } from "@/features/signUp/SignUp";
import styled from "styled-components";
import { Header } from "@/features/header/Header";

export const Form = () => {
  const FormWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 413px;
    background: #ffffff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  `;

  return (
    <FormWrapper>
      <Header value={"Sign Up"} />
      <SignUp />
    </FormWrapper>
  );
};
