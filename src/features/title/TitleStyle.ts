import styled from "styled-components";
import { ReactNode } from "react";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

type TitlePropsType = {
  children: ReactNode;
};

export const TitleWrapper = styled.h1<TitlePropsType>`
  ${resetMarginsAndPaddings};
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.2;
  ${colorVariables};
  color: var(--black-color);
`;
