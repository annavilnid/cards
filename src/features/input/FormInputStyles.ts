import styled from "styled-components";
import {
  colorVariables,
  hoverStyle,
  resetMarginsAndPaddings,
} from "@/common/styles/commonStyles";

const commonFontStyles = `
    font-style: normal
    font-weight: 400;
    font-size: 13px;
    line-height: 1.5;
`;

export const StyledInput = styled.input`
  min-height: 30px;
  width: 347px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  ${hoverStyle};
`;

export const StyledLabel = styled.label`
  padding: 4px 0 0 0;
  align-self: start;
  ${commonFontStyles};
  ${colorVariables};
  color: var(--black-color);
  opacity: 0.5;
`;

export const StyledError = styled.span`
  min-height: 20px;
  ${resetMarginsAndPaddings};
  align-self: start;
  ${commonFontStyles};
  ${colorVariables};
  color: var(--red-color);
`;
