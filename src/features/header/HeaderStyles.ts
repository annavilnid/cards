import styled from "styled-components";
import {
  colorVariables,
  resetMarginsAndPaddings,
} from "@/common/styles/commonStyles";
import { CustomButton } from "@/features/button/Button";

export const HeaderWrapper = styled.header`
  padding: 0 136px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  ${colorVariables};
  background-color: var(--gray-color);
  box-shadow: 0 2px 10px rgba(109, 109, 109, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
`;

export const Title = styled.h1`
  ${resetMarginsAndPaddings};
  ${colorVariables};
  color: var(--black-color);
`;

// export const StyledButton = styled(CustomButton)`
//   &.button {
//     ${colorVariables};
//     background-color: var(--blue-color);
//     min-width: 113px;
//   }
// `;
