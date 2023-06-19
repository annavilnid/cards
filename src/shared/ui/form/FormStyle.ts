import styled from "styled-components";
import { colorVariables } from "@/common/styles/commonStyles";

export const FormWrapper = styled.div`
  margin: 4.7% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 413px;
  ${colorVariables};
  background: var(--wite-color);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;
