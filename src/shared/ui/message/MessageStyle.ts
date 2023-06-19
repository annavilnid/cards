import styled from "styled-components";
import {
  colorVariables,
  resetMarginsAndPaddings,
} from "@/common/styles/commonStyles";
import { ReactNode } from "react";

type StyledTextType = {
  margin?: string;
  textAlign?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  opacity?: string;
};

export const StyledText = styled.p<StyledTextType>`
  ${resetMarginsAndPaddings};
  width: 347px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  font-size: ${({ lineHeight }) => lineHeight || "14px"};
  line-height: ${({ opacity }) => opacity || "1.7"};
  //font-weight: 600;
  //font-size: 14px;
  //line-height: 1.7;
  ${colorVariables};
  color: var(--black-color);
  opacity: ${({ opacity }) => opacity || "0.5"};
  //opacity: 0.5;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;
