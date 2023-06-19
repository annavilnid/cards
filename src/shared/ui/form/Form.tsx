import { Outlet } from "react-router-dom";
import { FormWrapper } from "./FormStyle";

export const Form = () => {
  return (
    <FormWrapper>
      <Outlet />
    </FormWrapper>
  );
};
