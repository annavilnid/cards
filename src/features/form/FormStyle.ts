import styled from "styled-components";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

export const FormWrapper = styled.div`
  margin: 0 auto;
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

export const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
  ${colorVariables};
  color: var(--black-color);
  opacity: 0.5;
`;
