import styled from "styled-components";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

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
