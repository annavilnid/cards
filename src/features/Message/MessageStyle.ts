import styled from "styled-components";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

export const StyledText = styled.p<{ margin?: string; textAlign?: string }>`
  ${resetMarginsAndPaddings};
  width: 347px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.7;

  ${colorVariables};
  color: var(--black-color);
  opacity: 0.5;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;
