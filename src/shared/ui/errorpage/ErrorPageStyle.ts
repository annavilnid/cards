import styled from "styled-components";
import { colorVariables } from "@/common/styles/commonStyles";
import { ReactComponent as ErrorIcon } from "@/assets/404.svg";

export const ErrorWrapper = styled.div`
  ${colorVariables};
  background-color: var(--lite-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
`;

export const ErrorContainer = styled.div`
  max-width: 218px;
  margin-right: 62px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledError = styled(ErrorIcon)`
  min-height: 192px;
  min-width: 451px;
`;
