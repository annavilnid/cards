import { CustomButton } from "@/features/button/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

const commonInputStyles = `
  min-height: 26px;
  width: 347px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

const commonFontStyles = `
    font-style: normal
    font-weight: 400;
    font-size: 13px;
    line-height: 1.5;
`;

export const StyledInput = styled.input`
  ${commonInputStyles};
`;

export const StyledWrapper = styled.div`
  ${commonInputStyles};
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const StyledInputWithPassword = styled.input`
  ${resetMarginsAndPaddings};
  outline: none;
  border: none;
  min-height: 100%;
  width: 92%;

  &.password-visible {
    ${commonFontStyles};
    ${colorVariables};
    color: var(--black-color);
  }

  &.password-hidden {
    ${commonFontStyles};
    color: transparent;
    text-shadow: 0 0 0 #000000;
`;

export const StyledLabel = styled.label`
  padding: 4px 0 0 0;
  align-self: start;
  ${commonFontStyles};
  ${colorVariables};
  color: var(--black-color);
  opacity: 0.5;
`;

export const StyledError = styled.p`
  min-height: 20px;
  ${resetMarginsAndPaddings};
  align-self: start;
  ${commonFontStyles};
  ${colorVariables};
  color: var(--red-color);
`;

export const StyledEyeIcon = styled(FontAwesomeIcon)`
  transform: translateY(-50%);
  cursor: pointer;
`;

export const StyledButton = styled(CustomButton)`
  &.button {
    ${colorVariables};
    background-color: var(--blue-color);
    min-width: 347px;
  }
`;
