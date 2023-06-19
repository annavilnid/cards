import styled from "styled-components";
import { ReactNode } from "react";
import {
  colorVariables,
  resetMarginsAndPaddings,
  font,
} from "@/common/styles/commonStyles";

type TitlePropsType = {
  children: ReactNode;
  margin?: string;
  padding?: string;
  fontSize?: string;
  lineHeight?: string;
};

//TODO срочная задача везде поправить padding во всех компонентах логинизации "35px 0"

export const TitleWrapper = styled.h1<TitlePropsType>`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  ${font};
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || "26px"};
  line-height: ${({ lineHeight }) => lineHeight || "1.2"};
  ${colorVariables};
  color: var(--black-color);
`;
